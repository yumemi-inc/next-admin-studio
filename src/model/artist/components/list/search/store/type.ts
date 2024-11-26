import type { FreeWordSearchInputSlice } from "../inputs/free-word/slice";
import type { StatusSearchInputSlice } from "../inputs/status/slice";
import type { ArtistSearchForm } from "../inputs/type";

export type ArtistSearchStore = {
  getSearchFormValue: () => ArtistSearchForm;
} & FreeWordSearchInputSlice &
  StatusSearchInputSlice;
