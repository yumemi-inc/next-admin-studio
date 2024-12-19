"use client";

import { ArtworkSalesStylePreviewView } from "../../../preview/sales-style";
import { useArtworkFormStore } from "../../store/hook";

export const ArtworkSalesStylePreviewContainer = () => {
  const salesStyle = useArtworkFormStore((state) => state.salesStyle);
  return <ArtworkSalesStylePreviewView value={salesStyle} />;
};
