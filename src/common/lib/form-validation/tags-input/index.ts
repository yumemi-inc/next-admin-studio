import { isBelowMaxLength, isEmpty } from "@/common/lib/guard";
import type { ValidationFn } from "../type";

export const TAGS_INPUT_VALIDATION_ERROR_MESSAGE = {
  EMPTY_INPUT: "1つ以上入力してください😃",
  NOT_NUMBER_INPUT: "数字で入力してください😃",
  NO_EMPTY_ITEM: "空の選択肢は入力できません😃",
  NO_DUPLICATE_ITEM: "選択肢は重複させないでください👺",
  OVER_MAX_LENGTH: (n: number) => `${n}文字以下で入力してください😃`,
} as const;

/**
 * 空でなければOK
 */
export const notEmptyTagsInputValidation: ValidationFn<string[]> = (v) => {
  const key = "EMPTY_INPUT";
  return {
    key,
    input: v,
    isOk: !isEmpty(v),
    errorMessage: TAGS_INPUT_VALIDATION_ERROR_MESSAGE[key],
  };
};

/**
 * 文字数制限
 */
export const maxLengthValidation =
  (n: number): ValidationFn<string[]> =>
  (v) => {
    const key = "OVER_MAX_LENGTH";
    const isEveryItemBelowMaxLength = v.every(isBelowMaxLength(n));
    return {
      key,
      input: v,
      isOk: isEveryItemBelowMaxLength,
      errorMessage: TAGS_INPUT_VALIDATION_ERROR_MESSAGE[key](n),
    };
  };

/**
 * 数字ならOK
 */
export const notNumberInputValidation: ValidationFn<string[]> = (v) => {
  const key = "NOT_NUMBER_INPUT";
  const isNumber = v.every((value) => !Number.isNaN(Number(value)));
  return {
    key,
    input: v,
    isOk: isNumber,
    errorMessage: TAGS_INPUT_VALIDATION_ERROR_MESSAGE[key],
  };
};

/**
 * 全ての要素が空文字でないならOK
 */
export const noEmptyItemInputValidation: ValidationFn<string[]> = (v) => {
  const key = "NO_EMPTY_ITEM";
  const isSomeoneEmpty = v.some(isEmpty);
  return {
    key,
    input: v,
    isOk: !isSomeoneEmpty,
    errorMessage: TAGS_INPUT_VALIDATION_ERROR_MESSAGE[key],
  };
};

/**
 * 重複アイテムがなければOK
 */
export const noDuplicateItemValidation: ValidationFn<string[]> = (v) => {
  const key = "NO_DUPLICATE_ITEM";
  const uniqueItems = new Set(v);
  const isDuplicate = uniqueItems.size !== v.length;
  return {
    key,
    input: v,
    isOk: !isDuplicate,
    errorMessage: TAGS_INPUT_VALIDATION_ERROR_MESSAGE[key],
  };
};
