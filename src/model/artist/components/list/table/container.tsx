"use client";

import type { FC } from "react";

import { useArtistTableItems } from "./query";
import { ArtistTableListView } from "./view";

export const ArtistTableListContainer: FC = () => {
  const artists = useArtistTableItems();

  return <ArtistTableListView artists={artists} />;
};
