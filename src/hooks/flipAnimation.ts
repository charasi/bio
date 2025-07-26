import { RefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { SplitText } from "gsap/SplitText";

type Animatable = "title" | "text" | "bullets" | "image";

interface UseFlipAnimationParams {
  flipState: ReturnType<typeof Flip.getState> | null;
  setFlipState: (state: ReturnType<typeof Flip.getState> | null) => void;
  setIsReady?: (ready: boolean) => void;
  animationOrder?: Animatable[];
}

interface UseFlipAnimationReturn {
  imgRef: RefObject<HTMLImageElement | null>;
  textRef: RefObject<HTMLDivElement | null>;
}

export function useFlipAnimation({
  flipState,
  setFlipState,
  setIsReady,
  animationOrder,
}: UseFlipAnimationParams): UseFlipAnimationReturn {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
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
            const timeline = gsap.timeline({
              onStart: () => setIsReady?.(true),
            });

            const lines = textRef.current!.querySelectorAll(".line");

            lines.forEach((line) => {
              const titleEl = line.querySelector("span.words.text-lg");
              const wordsEl = line.querySelector(".words:not(.text-lg)");
              const bulletItems = line.querySelectorAll("ul > li.words");
              const image = line.querySelector(".inline-img");

              const order = animationOrder ?? [
                "text",
                "title",
                "bullets",
                "image",
              ];

              order.forEach((key) => {
                switch (key) {
                  case "text":
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
                    break;

                  case "title":
                    if (titleEl) {
                      const split = SplitText.create(titleEl, {
                        type: "words",
                      });
                      timeline.fromTo(
                        split.words,
                        { opacity: 0, y: 10 },
                        {
                          opacity: 1,
                          y: 0,
                          stagger: 0.05,
                          duration: 0.8,
                          ease: "power2.out",
                        },
                        "-=0.3",
                      );
                    }
                    break;

                  case "bullets":
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
                    break;

                  case "image":
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
                    break;
                }
              });
            });
          });
        },
      });
    } else if (!flipState) {
      const state = Flip.getState(imgRef.current);
      setFlipState(state);
    }
  }, [flipState, setFlipState, animationOrder, setIsReady]);

  return { imgRef, textRef };
}
