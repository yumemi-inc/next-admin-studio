import { isBefore, isNullish } from "@/common/lib/guard";
import type { ValidationFn } from "../type";

export const DATE_INPUT_VALIDATION_ERROR_MESSAGE = {
  EMPTY_DATE: "選択してください📆",
  IS_AFTER: (label: string) => `${label}よりも後の日付を選択してください😭`,
} as const;

/**
 * nullでなければOK
 */
export const notEmptyDateValidation: ValidationFn<Date | null> = (v) => {
  const key = "EMPTY_DATE";
  return {
    key,
    input: v,
    isOk: !isNullish(v),
    errorMessage: DATE_INPUT_VALIDATION_ERROR_MESSAGE[key],
  };
};

/**
 * 指定時刻よりも後であればOK（デフォルトは現在時刻）
 */
export const isAfterValidation =
  // biome-ignore lint/style/useDefaultParameterLast: <explanation>
    (date = new Date(), { label = "現在時刻" }): ValidationFn<Date | null> =>
    (v) => {
      const key = "IS_AFTER";
      const isSkipped = v === null;

      return {
        key,
        input: v,
        isOk: isSkipped || isBefore(date)(v),
        errorMessage: DATE_INPUT_VALIDATION_ERROR_MESSAGE[key](label),
      };
    };
