"use client";

import { ArtworkTitlePreviewView } from "../../../preview/title";
import { useArtworkFormStore } from "../../store/hook";

export const ArtworkTitlePreviewContainer = () => {
  const title = useArtworkFormStore((state) => state.title);
  return <ArtworkTitlePreviewView value={title} />;
};
