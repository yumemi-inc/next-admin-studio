import type { StateCreator } from "zustand";

export type FreeWordSearchInputSlice = {
  freeWord: string;
  setFreeWord: (freeWord: string) => void;
};

export const createFreeWordSearchInputSlice =
  (initialState: {
    freeWord: string;
  }): StateCreator<FreeWordSearchInputSlice> =>
  (set) => ({
    freeWord: initialState.freeWord,
    setFreeWord: (freeWord) => set({ freeWord }),
  });
