import { createSearchParamsCache, parseAsString } from "nuqs/server";

export const copyAndNewParams = {
  base: parseAsString.withDefault(""),
};

export const copyAndNewParamsCache = createSearchParamsCache(copyAndNewParams);
