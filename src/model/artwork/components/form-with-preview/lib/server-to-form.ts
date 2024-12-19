import type { Artwork } from "@/model/artwork/type";
import { fileUploadConverter } from "@/model/common/lib/file-upload-converter";

import { artistSalesStyleConverter } from "../form/inputs/sales-style/converter";
import type { ArtworkForm } from "../form/type";
import { ARTWORK_FORM_STORE_INITIAL_STATE } from "../store/const";

export const artworkServerToForm = (
  serverState: Artwork | undefined,
): ArtworkForm => {
  if (!serverState) return ARTWORK_FORM_STORE_INITIAL_STATE;

  return {
    ...serverState,
    image: fileUploadConverter.toClient(serverState.image),
    ...artistSalesStyleConverter.toClient(serverState.salesStyle),
    artist: serverState.artist?.id ?? null,
  };
};
