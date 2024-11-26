"use client";

import type { FC } from "react";

import { useArtworkTableItems } from "./query";
import { ArtworkTableListView } from "./view";

export const ArtworkTableListContainer: FC = () => {
  const artworks = useArtworkTableItems();

  return <ArtworkTableListView artworks={artworks} />;
};
