import { isEmpty } from "@/common/lib/guard";
import type { ValidationFn } from "../type";

export const RADIO_BUTTON_GROUP_VALIDATION_ERROR_MESSAGE = {
  EMPTY_INPUT: "1つ以上選択してください😃",
} as const;

/**
 * 空文字でなければOK
 */
export const notEmptyInputValidation: ValidationFn<string> = (v) => {
  const key = "EMPTY_INPUT";
  return {
    key,
    input: v,
    isOk: !isEmpty(v),
    errorMessage: RADIO_BUTTON_GROUP_VALIDATION_ERROR_MESSAGE[key],
  };
};
