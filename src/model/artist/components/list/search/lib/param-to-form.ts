import type { ArtistSearchForm } from "../inputs/type";
import type { ArtistSearchParams } from "../params";

export const artistListSearchParamToForm = (
  params: ArtistSearchParams,
): ArtistSearchForm => {
  return {
    freeWord: params.q,
    status: params.status,
  };
};
