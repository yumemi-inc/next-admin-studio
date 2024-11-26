import type { ArtworkSalesStyle } from "./type";

export const ARTWORK_SALES_STYLE_DEFAULT_VALUE: string = "";

export const ARTWORK_SALES_STYLE = {
  auction: {
    label: "オークション",
    value: "auction",
  },
  fixed_price: {
    label: "定価販売",
    value: "fixed_price",
  },
} satisfies Record<
  ArtworkSalesStyle,
  { label: string; value: ArtworkSalesStyle }
>;

export const ARTWORK_SALES_STYLE_OPTIONS = Object.values(ARTWORK_SALES_STYLE);
