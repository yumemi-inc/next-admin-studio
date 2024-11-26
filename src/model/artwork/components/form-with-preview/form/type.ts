import type { NullableDateRange } from "@/common/components/form/date-time-range-input/type";

import type { ArtworkSalesStyleInputSlice } from "./inputs/sales-style/slice";

export type ArtworkForm = {
  adminLabel: string;
  title: string;
  description: string;
  artist: string | null;
  image: {
    url: string;
    file: File | null;
  };
  openAt: Date | null;
  salesPeriod: NullableDateRange;
  condition: string[];
} & ArtworkSalesStyleInputSlice;
