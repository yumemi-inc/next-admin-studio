import type { ValidationFn } from "../type";

export const NUMBER_INPUT_VALIDATION_ERROR_MESSAGE = {
  EMPTY_INPUT: "数値を入力してください😃",
} as const;

/**
 * 空文字（=未入力）でなければOK
 */
export const notEmptyNumberInputValidation: ValidationFn<string | number> = (
  v,
) => {
  const key = "EMPTY_INPUT";
  return {
    key,
    input: v,
    isOk: v !== "",
    errorMessage: NUMBER_INPUT_VALIDATION_ERROR_MESSAGE[key],
  };
};
