import { parseDate } from "@internationalized/date";
import type { DateValue } from "react-aria";

import { formatDate } from "@/common/lib/format-date";
import { isNullish } from "@/common/lib/guard";

// Date型の値をDateValue型に変換する
export const dateToDateValue = (date: Date | null): DateValue | null => {
  if (isNullish(date)) return null;
  try {
    const dateValue = parseDate(formatDate(date, "YYYY/MM/DD"));
    return dateValue;
  } catch {
    // 無効な日付の場合はnullを返す
    return null;
  }
};
