import { RefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { SplitText } from "gsap/SplitText";

interface UseFlipAnimationParams {
  flipState: ReturnType<typeof Flip.getState> | null;
  setFlipState: (state: ReturnType<typeof Flip.getState> | null) => void;
  setIsReady?: (ready: boolean) => void;
}

interface UseFlipAnimationReturn {
  imgRef: RefObject<HTMLImageElement | null>;
  textRef: RefObject<HTMLParagraphElement | null>;
}

export function useFlipAnimation({
  flipState,
  setFlipState,
  setIsReady,
}: UseFlipAnimationParams): UseFlipAnimationReturn {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!imgRef.current) return;

    if (!hasAnimated.current && flipState) {
      hasAnimated.current = true;

      Flip.from(flipState, {
        targets: imgRef.current,
        duration: 1,
        ease: "power1.inOut",
        onComplete: () => {
          const state = Flip.getState(imgRef.current);
          setFlipState(state);

          if (!textRef.current) return;

          document.fonts.ready.then(() => {
            const split = SplitText.create(textRef.current, {
              type: "words",
            });

            gsap.fromTo(
              split.words,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.05,
                duration: 0.9,
                ease: "power2.out",
                onStart: () => {
                  if (setIsReady) setIsReady(true);
                },
              },
            );
          });
        },
      });
    } else if (!flipState) {
      const state = Flip.getState(imgRef.current);
      setFlipState(state);
    }
  }, [flipState, setFlipState]);

  return { imgRef, textRef };
}
