"use client";

import { ArtworkDescriptionPreviewView } from "../../../preview/description";
import { useArtworkFormStore } from "../../store/hook";

export const ArtworkDescriptionPreviewContainer = () => {
  const description = useArtworkFormStore((state) => state.description);
  return <ArtworkDescriptionPreviewView value={description} />;
};
