export const CONTENT_STATUS = {
  NEW: "NEW",
  DRAFT: "DRAFT",
  CONFIRMED: "CONFIRMED",
  TEMPORARILY_CLOSED: "TEMPORARILY_CLOSED",
} as const;

export type ContentStatus =
  (typeof CONTENT_STATUS)[keyof typeof CONTENT_STATUS];
