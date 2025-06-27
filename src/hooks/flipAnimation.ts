import { useEffect, useRef } from "react";
import { Flip } from "gsap/Flip";

interface UseFlipAnimationParams {
  flipState: ReturnType<typeof Flip.getState> | null;
  setFlipState: (state: ReturnType<typeof Flip.getState> | null) => void;
}

export function useFlipAnimation({
  flipState,
  setFlipState,
}: UseFlipAnimationParams) {
  const imgRef = useRef(null);
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
        },
      });
    } else if (!flipState) {
      const state = Flip.getState(imgRef.current);
      setFlipState(state);
    }
  }, [flipState, setFlipState]);

  return imgRef;
}
