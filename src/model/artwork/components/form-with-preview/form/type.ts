import type { NullableDateRange } from "@/common/components/form/date-time-range-input/type";

export type ArtworkForm = {
  adminLabel: string;
  title: string;
  description: string;
  artist: string | null;
  imageUrl: string;
  imageFile: File | null;
  openAt: Date | null;
  salesPeriod: NullableDateRange;
  salesStyle: string;
  condition: string[];
};
