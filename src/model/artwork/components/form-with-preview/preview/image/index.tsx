"use client";
import { ArtworkImagePreviewView } from "../../../preview/image";
import { useArtworkFormStore } from "../../store/hook";

export const ArtworkImagePreviewContainer = () => {
  const url = useArtworkFormStore((state) => state.image.url);
  return <ArtworkImagePreviewView value={url} />;
};
