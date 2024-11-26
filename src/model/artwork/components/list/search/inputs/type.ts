import type { StatusSearchOption } from "@/model/common/const/search-options";

export type ArtworkSearchForm = {
  freeWord: string;
  status: StatusSearchOption;
};
