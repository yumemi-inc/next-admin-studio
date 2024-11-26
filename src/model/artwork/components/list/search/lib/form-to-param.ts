import type { ArtworkSearchForm } from "../inputs/type";
import type { ArtworkSearchParams } from "../params";

export const artworkListSearchFormToParam = (
  form: ArtworkSearchForm,
): ArtworkSearchParams => {
  return {
    q: form.freeWord,
    status: form.status,
  };
};
