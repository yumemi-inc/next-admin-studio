"use client";

import { ArtworkSalesPeriodPreviewView } from "../../../preview/sales-period";
import { useArtworkFormStore } from "../../store/hook";

export const ArtworkSalesPeriodPreviewContainer = () => {
  const salesPeriod = useArtworkFormStore((state) => state.salesPeriod);
  return <ArtworkSalesPeriodPreviewView value={salesPeriod} />;
};
