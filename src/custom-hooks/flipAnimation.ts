import { RefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { SplitText } from "gsap/SplitText";

//type Animatable = "title" | "text" | "bullets" | "image";

interface UseFlipAnimationParams {
  flipState: ReturnType<typeof Flip.getState> | null;
  setFlipState: (state: ReturnType<typeof Flip.getState> | null) => void;
  setIsReady?: (ready: boolean) => void;
  animationOrder?: string[];
  targetOrder?: string[][];
  refTagElement: string;
}

interface UseFlipAnimationReturn {
  divRef: RefObject<HTMLDivElement | null>;
  //imgRef: RefObject<HTMLImageElement | null>;
  //textRef: RefObject<HTMLDivElement | null>;
}

export function useFlipAnimation({
  flipState,
  setFlipState,
  setIsReady,
  animationOrder,
  targetOrder,
  refTagElement,
}: UseFlipAnimationParams): UseFlipAnimationReturn {
  const ref: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(
    null,
  );
  const hasAnimated: RefObject<boolean> = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const flipElem: Element | null = ref.current.querySelector(refTagElement);
    if (!hasAnimated.current && flipState) {
      hasAnimated.current = true;

      Flip.from(flipState, {
        targets: flipElem,
        duration: 1,
        ease: "power1.inOut",
        onComplete: () => {
          const state = Flip.getState(flipElem);
          setFlipState(state);

          document.fonts.ready.then(() => {
            const timeline = gsap.timeline({
              onStart: () => setIsReady?.(true),
            });

            const order = animationOrder ?? [
              "text",
              "title",
              "bullets",
              "image",
            ];

            order.forEach((key: string, index: number) => {
              const target: string[] = targetOrder![index];
              switch (key) {
                case "text":
                  target.forEach((element: string) => {
                    const wordsEl = ref.current!.querySelectorAll(element);
                    if (wordsEl) {
                      const split = SplitText.create(wordsEl, {
                        type: "words",
                      });
                      timeline.fromTo(
                        split.words,
                        { opacity: 0, y: 20 },
                        {
                          opacity: 1,
                          y: 0,
                          stagger: 0.05,
                          duration: 0.9,
                          ease: "power2.out",
                        },
                      );
                    }
                  });
                  break;

                case "bullets":
                  target.forEach((element: string) => {
                    const bulletItems = ref.current!.querySelectorAll(element);
                    if (bulletItems.length > 0) {
                      timeline.fromTo(
                        bulletItems,
                        { opacity: 0, x: -20 },
                        {
                          opacity: 1,
                          x: 0,
                          stagger: 0.1,
                          duration: 0.6,
                          ease: "power2.out",
                        },
                        "-=0.3",
                      );
                    }
                  });
                  break;

                case "image":
                  target.forEach((element: string) => {
                    const image = ref.current!.querySelectorAll(element);
                    if (image) {
                      timeline.fromTo(
                        image,
                        { opacity: 0, scale: 0.9 },
                        {
                          opacity: 1,
                          scale: 1,
                          duration: 0.8,
                          ease: "back.out(1.7)",
                        },
                        "+=0.2",
                      );
                    }
                  });
                  break;
              }
            });
          });
        },
      });
    } else if (!flipState) {
      const state = Flip.getState(flipElem);
      setFlipState(state);
    }
  }, [flipState, setFlipState, animationOrder, setIsReady]);

  return { divRef: ref };
}
