import type { StateCreator } from "zustand";

import type { StatusSearchOption } from "@/model/common/const/search-options";

export type StatusSearchInputSlice = {
  status: StatusSearchOption;
  setStatus: (status: StatusSearchOption) => void;
};

export const createStatusSearchInputSlice =
  (initialState: {
    status: StatusSearchOption;
  }): StateCreator<StatusSearchInputSlice> =>
  (set) => ({
    status: initialState.status,
    setStatus: (status) => set({ status }),
  });
