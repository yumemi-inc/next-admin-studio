"use client";

import { useArtistTableItems } from "./query";
import { ArtistPreviewListView } from "./view";

export const ArtistPreviewListContainer = () => {
  const artists = useArtistTableItems();
  return <ArtistPreviewListView artists={artists} />;
};
