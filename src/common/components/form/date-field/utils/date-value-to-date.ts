import type { DateValue } from "react-aria";

import { isNullish } from "@/common/lib/guard";

// DateValue型の値をDate型に変換する
export const dateValueToDate = (dateValue: DateValue | null): Date | null => {
  if (isNullish(dateValue)) return null;
  const { year, month, day } = dateValue;
  return new Date(year, month - 1, day);
};
