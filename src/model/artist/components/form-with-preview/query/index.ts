import { ARTIST_MOCK_DATA } from "@/model/artist/mock";
import { NEW_ITEM_ID } from "@/model/common/const/key";

import type { Artist } from "../../../type";

export const getArtist = (id: string): Artist | undefined => {
  if (id === NEW_ITEM_ID) return undefined;

  const artist = ARTIST_MOCK_DATA.find((artist) => artist.id === id);

  return artist;
};
