import type { ArtistSearchForm } from "../inputs/type";
import type { ArtistSearchParams } from "../params";

export const artistListSearchFormToParam = (
  form: ArtistSearchForm,
): ArtistSearchParams => {
  return {
    q: form.freeWord,
    status: form.status,
  };
};
