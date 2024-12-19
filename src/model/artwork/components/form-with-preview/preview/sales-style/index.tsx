"use client";

import { ArtworkSalesStylePreviewView } from "../../../preview/sales-style";
import { useArtworkFormStore } from "../../store/hook";

export const ArtworkSalesStylePreviewContainer = () => {
  const salesStyle = useArtworkFormStore((state) => state.salesStyle);
  const auctionStartingPrice = useArtworkFormStore(
    (state) => state.auctionStartingPrice,
  );
  const fixedPrice = useArtworkFormStore((state) => state.fixedPrice);

  return (
    <ArtworkSalesStylePreviewView
      salesStyle={salesStyle}
      price={salesStyle === "AUCTION" ? auctionStartingPrice : fixedPrice}
    />
  );
};
