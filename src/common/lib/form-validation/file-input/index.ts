import { isEmpty } from "@/common/lib/guard";
import type { ValidationFn } from "../type";

export const FILE_INPUT_VALIDATION_ERROR_MESSAGE = {
  EMPTY_INPUT: "画像をアップロードしてください🌠",
} as const;

/**
 * nullでなければOK
 */
export const notEmptyFileInputValidation: ValidationFn<string> = (v) => {
  const key = "EMPTY_INPUT";
  return {
    key,
    input: v,
    isOk: !isEmpty(v),
    errorMessage: FILE_INPUT_VALIDATION_ERROR_MESSAGE[key],
  };
};
