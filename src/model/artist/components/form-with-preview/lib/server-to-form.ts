import type { Artist } from "@/model/artist/type";

import type { ArtistForm } from "../form/type";
import { ARTIST_FORM_STORE_INITIAL_STATE } from "../store/const";

export const artistServerToForm = (
  serverState: Artist | undefined,
): ArtistForm => {
  if (!serverState) return ARTIST_FORM_STORE_INITIAL_STATE;

  return {
    ...serverState,
  };
};
