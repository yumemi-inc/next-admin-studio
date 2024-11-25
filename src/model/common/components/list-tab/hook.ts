import { parseAsStringLiteral, useQueryState } from "nuqs";

export const LIST_VIEW_TABS = {
  TABLE: "table",
  PREVIEW: "preview",
} as const;

export type TabType = (typeof LIST_VIEW_TABS)[keyof typeof LIST_VIEW_TABS];

const TAB_VALUES: TabType[] = Object.values(LIST_VIEW_TABS);

const PARAM_KEY_FOR_TAB = "tab";

export const useListTabParams = () => {
  return useQueryState(
    PARAM_KEY_FOR_TAB,
    parseAsStringLiteral(TAB_VALUES).withDefault(LIST_VIEW_TABS.TABLE),
  );
};
