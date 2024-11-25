import { parseAsInteger, useQueryState } from "nuqs";

const PARAM_KEY_FOR_PAGE = "page";

export const usePagination = () => {
  return useQueryState(PARAM_KEY_FOR_PAGE, parseAsInteger.withDefault(1));
};
