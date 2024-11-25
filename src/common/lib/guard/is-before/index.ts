import dayjs from "dayjs";

/**
 * b is before a
 * @param b
 * @returns
 */
export const isBefore = (b: Date) => (a: Date) => dayjs(b).isBefore(dayjs(a));
