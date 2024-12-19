"use client";

import { ArtworkConditionPreviewView } from "../../../preview/condition";
import { useArtworkFormStore } from "../../store/hook";

export const ArtworkConditionPreviewContainer = () => {
  const condition = useArtworkFormStore((state) => state.condition);
  return <ArtworkConditionPreviewView value={condition} />;
};
