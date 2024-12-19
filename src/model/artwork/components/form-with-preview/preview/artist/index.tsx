"use client";

import { getArtist } from "@/model/artist/components/form-with-preview/query";
import { ArtworkArtistPreviewView } from "../../../preview/artist";
import { useArtworkFormStore } from "../../store/hook";

export const ArtworkArtistPreviewContainer = () => {
  const artist = useArtworkFormStore((state) => state.artist);

  const artistData = artist ? (getArtist(artist) ?? null) : null;

  return <ArtworkArtistPreviewView value={artistData} />;
};
