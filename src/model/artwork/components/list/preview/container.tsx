"use client";

import { useArtworkTableItems } from "./query";
import { ArtworkPreviewListView } from "./view";

export const ArtworkPreviewListContainer = () => {
  const artworks = useArtworkTableItems();
  return <ArtworkPreviewListView artworks={artworks} />;
};
