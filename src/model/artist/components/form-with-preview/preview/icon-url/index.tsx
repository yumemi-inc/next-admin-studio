"use client";

import { ArtistIconUrlPreviewView } from "../../../preview/icon-url";
import { useArtistFormStore } from "../../store/hook";

export const ArtistIconUrlPreviewContainer = () => {
  const iconUrl = useArtistFormStore((state) => state.iconUrl);
  return <ArtistIconUrlPreviewView value={iconUrl} />;
};
