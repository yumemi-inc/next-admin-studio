import type { ContentStatus } from "@/model/common/const/content-status";

import type { NullableDateRange } from "@/common/components/form/date-time-range-input/type";

export type Artwork = {
  id: string;
  adminLabel: string;
  title: string;
  description: string;
  artist: string | null;
  image: string;
  openAt: Date | null;
  salesPeriod: NullableDateRange;
  condition: string[];
  creationStatus: ContentStatus;
  salesStyle:
    | {
        type: "AUCTION";
        startingPrice: number;
      }
    | {
        type: "FIXED_PRICE";
        fixedPrice: number;
      };
};
