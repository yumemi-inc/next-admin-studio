import type { ArtworkSalesStyle } from "./type";

export const ARTWORK_SALES_STYLE_DEFAULT_VALUE: ArtworkSalesStyle = "AUCTION";

export const ARTWORK_SALES_STYLE = {
  AUCTION: {
    label: "オークション",
    value: "AUCTION",
  },
  FIXED_PRICE: {
    label: "定価販売",
    value: "FIXED_PRICE",
  },
} satisfies Record<
  ArtworkSalesStyle,
  { label: string; value: ArtworkSalesStyle }
>;

export const ARTWORK_SALES_STYLE_OPTIONS = Object.values(ARTWORK_SALES_STYLE);
