import type { NullableDateRange } from "@/common/components/form/date-time-range-input/type";
import { isNonNull } from "@/common/lib/guard";

export const isNonNullDateRange = (v: NullableDateRange): v is [Date, Date] => {
  return isNonNull(v[0]) && isNonNull(v[1]);
};
