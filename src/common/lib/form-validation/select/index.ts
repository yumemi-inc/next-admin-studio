import { isNonNull } from "@/common/lib/guard";

import type { ValidationFn } from "../type";

export const SELECT_VALIDATION_ERROR_MESSAGE = {
  EMPTY_INPUT: "選択してください😃",
} as const;

/**
 * nullでなければOK
 */
export const notEmptySelectValidation: ValidationFn<string | null> = (v) => {
  const key = "EMPTY_INPUT";
  return {
    key,
    input: v,
    isOk: isNonNull(v),
    errorMessage: SELECT_VALIDATION_ERROR_MESSAGE[key],
  };
};
