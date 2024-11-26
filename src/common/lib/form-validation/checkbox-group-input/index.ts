import { isEmpty } from "@/common/lib/guard";

import type { ValidationFn } from "../type";

export const CHECKBOX_GROUP_INPUT_VALIDATION_ERROR_MESSAGE = {
  EMPTY_INPUT: "1つ以上選択してください😃",
} as const;

/**
 * 空でなければOK
 */
export const notEmptyCheckboxGroupInputValidation: ValidationFn<string[]> = (
  v,
) => {
  const key = "EMPTY_INPUT";
  return {
    key,
    input: v,
    isOk: !isEmpty(v),
    errorMessage: CHECKBOX_GROUP_INPUT_VALIDATION_ERROR_MESSAGE[key],
  };
};
