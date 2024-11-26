import type { FreeWordSearchInputSlice } from "../inputs/free-word/slice";
import type { StatusSearchInputSlice } from "../inputs/status/slice";
import type { ArtworkSearchForm } from "../inputs/type";

export type ArtworkSearchStore = {
  getSearchFormValue: () => ArtworkSearchForm;
} & FreeWordSearchInputSlice &
  StatusSearchInputSlice;
