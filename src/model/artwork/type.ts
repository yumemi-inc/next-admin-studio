import type { NullableDateRange } from "@/common/components/form/date-time-range-input/type";
import type { Artist } from "../artist/type";

export type Artwork = {
  id: string;
  adminLabel: string;
  title: string;
  description: string;
  artist: Artist | null;
  image: string;
  openAt: Date | null;
  salesPeriod: NullableDateRange;
  condition: string[];
  creationStatus: "DRAFT" | "CONFIRMED";
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
