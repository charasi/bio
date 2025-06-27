import { create } from "zustand";
import { Flip } from "gsap/Flip";

type FlipStore = {
  flipState: ReturnType<typeof Flip.getState> | null;
  setFlipState: (state: ReturnType<typeof Flip.getState> | null) => void;
};

export const useFlipStore = create<FlipStore>((set) => ({
  flipState: null,
  setFlipState: (state) => set({ flipState: state }),
}));
