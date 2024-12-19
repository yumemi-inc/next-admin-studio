"use client";

import { ArtworkImagePreviewView } from "../../../preview/image";
import { useArtworkFormStore } from "../../store/hook";

export const ArtworkImagePreviewContainer = () => {
  const image = useArtworkFormStore((state) => state.image.file);
  return <ArtworkImagePreviewView value={image} />;
};
