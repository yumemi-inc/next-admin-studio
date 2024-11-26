import type { ArtworkSearchForm } from "../inputs/type";
import type { ArtworkSearchParams } from "../params";

export const artworkListSearchParamToForm = (
  params: ArtworkSearchParams,
): ArtworkSearchForm => {
  return {
    freeWord: params.q,
    status: params.status,
  };
};
