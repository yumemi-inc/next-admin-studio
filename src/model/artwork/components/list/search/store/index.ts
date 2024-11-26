import { create } from "zustand";

import { createFreeWordSearchInputSlice } from "../inputs/free-word/slice";
import { createStatusSearchInputSlice } from "../inputs/status/slice";
import type { ArtworkSearchForm } from "../inputs/type";
import type { ArtworkSearchStore } from "./type";

export const createArtworkSearchStore = (initialState: ArtworkSearchForm) =>
  create<ArtworkSearchStore>((set, get, store) => ({
    ...createFreeWordSearchInputSlice(initialState)(set, get, store),
    ...createStatusSearchInputSlice(initialState)(set, get, store),
    getSearchFormValue: get,
  }));
