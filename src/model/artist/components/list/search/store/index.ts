import { create } from "zustand";

import { createFreeWordSearchInputSlice } from "../inputs/free-word/slice";
import { createStatusSearchInputSlice } from "../inputs/status/slice";
import type { ArtistSearchForm } from "../inputs/type";
import type { ArtistSearchStore } from "./type";

export const createArtistSearchStore = (initialState: ArtistSearchForm) =>
  create<ArtistSearchStore>((set, get, store) => ({
    ...createFreeWordSearchInputSlice(initialState)(set, get, store),
    ...createStatusSearchInputSlice(initialState)(set, get, store),
    getSearchFormValue: get,
  }));
