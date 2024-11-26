import type { Artwork } from "@/model/artwork/type";

import type { ArtworkForm } from "../form/type";
import { ARTWORK_FORM_STORE_INITIAL_STATE } from "../store/const";

export const artworkServerToForm = (
  serverState: Artwork | undefined,
): ArtworkForm => {
  if (!serverState) return ARTWORK_FORM_STORE_INITIAL_STATE;

  return {
    ...serverState,
  };
};
