import {
  type inferParserType,
  parseAsString,
  parseAsStringLiteral,
} from "nuqs";

import {
  STATUS_SEARCH_OPTIONS,
  STATUS_SEARCH_OPTIONS_ANY,
} from "@/model/common/const/search-options";

export const artworkSearchParams = {
  q: parseAsString.withDefault(""),
  status: parseAsStringLiteral(
    STATUS_SEARCH_OPTIONS.map((option) => option.value),
  ).withDefault(STATUS_SEARCH_OPTIONS_ANY),
};

export type ArtworkSearchParams = inferParserType<typeof artworkSearchParams>;
