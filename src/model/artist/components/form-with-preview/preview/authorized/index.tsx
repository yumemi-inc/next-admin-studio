"use client";

import { ArtistAuthorizedPreviewView } from "../../../preview/authorized";
import { useArtistFormStore } from "../../store/hook";

export const ArtistAuthorizedPreviewContainer = () => {
  const value = useArtistFormStore((state) => state.authorized);
  return <ArtistAuthorizedPreviewView value={value} />;
};
