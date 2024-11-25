import { isBelowMaxLength, isEmpty, isUrl } from "@/common/lib/guard";

import type { ValidationFn } from "../type";

export const TEXT_INPUT_VALIDATION_ERROR_MESSAGE = {
  EMPTY_INPUT: "1文字以上入力してください😃",
  INVALID_URL: "URLの形式が正しくないようです👀",
  OVER_MAX_LENGTH: (n: number) => `${n}文字以下で入力してください😃`,
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
    errorMessage: TEXT_INPUT_VALIDATION_ERROR_MESSAGE[key],
  };
};

/**
 * URL形式であればOK
 */
export const urlValidation: ValidationFn<string> = (v) => {
  const key = "INVALID_URL";
  return {
    key,
    input: v,
    isOk: isUrl(v),
    errorMessage: TEXT_INPUT_VALIDATION_ERROR_MESSAGE[key],
  };
};

/**
 * 文字数がn文字以下であればOK
 */
export const maxLengthValidation =
  (n: number): ValidationFn<string> =>
  (v) => {
    const key = "OVER_MAX_LENGTH";
    return {
      key,
      input: v,
      isOk: isBelowMaxLength(n)(v),
      errorMessage: TEXT_INPUT_VALIDATION_ERROR_MESSAGE[key](n),
    };
  };
