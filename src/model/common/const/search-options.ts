import { CONTENT_STATUS } from "./content-status";

export const STATUS_SEARCH_OPTIONS_ANY = "ANY";

export const STATUS_SEARCH_OPTIONS = [
  { label: "絞り込まない", value: STATUS_SEARCH_OPTIONS_ANY },
  { label: "下書き", value: CONTENT_STATUS.DRAFT },
  { label: "確定", value: CONTENT_STATUS.CONFIRMED },
  { label: "一時非公開", value: CONTENT_STATUS.TEMPORARILY_CLOSED },
] as const;

export type StatusSearchOption =
  (typeof STATUS_SEARCH_OPTIONS)[number]["value"];
