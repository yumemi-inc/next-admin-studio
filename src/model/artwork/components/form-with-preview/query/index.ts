import { ARTWORK_MOCK_DATA } from "@/model/artwork/mock";
import { NEW_ITEM_ID } from "@/model/common/const/key";

import type { Artwork } from "../../../type";

export const getArtwork = (id: string): Artwork | undefined => {
  if (id === NEW_ITEM_ID) return undefined;

  const artwork = ARTWORK_MOCK_DATA.find((artwork) => artwork.id === id);

  return artwork;
};
