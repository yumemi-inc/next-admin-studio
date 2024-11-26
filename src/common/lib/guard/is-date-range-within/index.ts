import { isSameOrBeforeDate } from "@/common/lib/guard/is-same-or-before";

// 大きい範囲.start ≤ 大きい範囲.start ≤ 小さい範囲.end ≤ 大きい範囲.end
export const isDateRangeWithin =
  (largeDaterange: [Date, Date]) =>
  (smallDateRange: [Date, Date]): boolean => {
    return (
      isSameOrBeforeDate(largeDaterange[0])(smallDateRange[0]) &&
      isSameOrBeforeDate(smallDateRange[1])(largeDaterange[1])
    );
  };
