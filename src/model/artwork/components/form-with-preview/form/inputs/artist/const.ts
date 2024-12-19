import { ARTIST_MOCK_DATA } from "@/model/artist/mock";

export const ARTWORK_ARTIST_DEFAULT_VALUE: string | null = null;

export const ARTWORK_ARTIST_OPTIONS = ARTIST_MOCK_DATA.map((artist) => ({
  label: artist.name,
  value: artist.id,
}));
