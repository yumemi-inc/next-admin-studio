"use client";

import { ArtworkArtistPreviewView } from "../../../preview/artist";
import { useArtworkFormStore } from "../../store/hook";

export const ArtworkArtistPreviewContainer = () => {
  const artist = useArtworkFormStore((state) => state.artist);
  return <ArtworkArtistPreviewView value={artist} />;
};
