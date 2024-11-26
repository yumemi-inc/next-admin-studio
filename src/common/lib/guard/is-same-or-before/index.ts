import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

/**
 * b is same or before a
 * @param b
 * @returns
 */

dayjs.extend(isSameOrBefore);
export const isSameOrBeforeDate = (b: Date) => (a: Date) =>
  dayjs(b).isSameOrBefore(dayjs(a));
