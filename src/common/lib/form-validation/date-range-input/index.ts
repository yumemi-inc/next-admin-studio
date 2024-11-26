import type { NullableDateRange } from "@/common/components/form/date-time-range-input/type";
import { isNonNullDateRange } from "@/common/lib/form-validation/is-non-null-date-range";
import type {
  Validation,
  ValidationFn,
} from "@/common/lib/form-validation/type";
import { isBefore, isNonNull } from "@/common/lib/guard";
import { isDateRangeWithin } from "@/common/lib/guard/is-date-range-within";

export const DATE_RANGE_INPUT_VALIDATION_ERROR_MESSAGE = {
  EMPTY_START_DATE: (label = "開始日") => `${label}を選択してください📆`,
  EMPTY_END_DATE: (label = "終了日") => `${label}を選択してください📆`,
  START_DATE_IS_BEFORE_END_DATE: (label = "開始日", endLabel = "終了日") =>
    `${label}は${endLabel}よりも前に設定してください📆`,
} as const;
/**
 * 1番目の値がnullでなければOK
 */
export const notEmptyStartDateValidation =
  (label = "開始日"): ValidationFn<NullableDateRange> =>
  (v) => {
    const key = "EMPTY_START_DATE";
    return {
      key,
      input: v,
      isOk: isNonNull(v[0]),
      errorMessage: DATE_RANGE_INPUT_VALIDATION_ERROR_MESSAGE[key](label),
    };
  };

/**
 * 2番目の値がnullでなければOK
 */
export const notEmptyEndDateValidation =
  (label = "終了日"): ValidationFn<NullableDateRange> =>
  (v) => {
    const key = "EMPTY_END_DATE";
    return {
      key,
      input: v,
      isOk: isNonNull(v[1]),
      errorMessage: DATE_RANGE_INPUT_VALIDATION_ERROR_MESSAGE[key](label),
    };
  };

/**
 * 1番目の値が2番目の値よりも前であればOK
 */
export const startDateIsBeforeEndDateValidation =
  (label = "開始日", endLabel = "終了日"): ValidationFn<NullableDateRange> =>
  (v) => {
    const key = "START_DATE_IS_BEFORE_END_DATE";

    // MEMO: [null, null]でもtrueになってしまうが、両方入力されたタイミングでonChangeで判断したいためこうする
    const isOk = !isNonNullDateRange(v) || isBefore(v[0])(v[1]);

    return {
      key,
      input: v,
      isOk,
      errorMessage: DATE_RANGE_INPUT_VALIDATION_ERROR_MESSAGE[key](
        label,
        endLabel,
      ),
    };
  };

/**
 * 1番目の値が2番目の値よりも前であればOK
 */
export const largeDateRangeContainsSmallDateRangeValidation =
  (errorMessage: string) =>
  (largeDaterange: NullableDateRange) =>
  (
    smallDateRange: NullableDateRange,
  ): Validation<{
    largeDaterange: NullableDateRange;
    smallDateRange: NullableDateRange;
  }> => {
    const key = "LARGE_DATE_RANGE_CONTAINS_SMALL_DATE_RANGE";

    const isLargeDaterangeNonNull = isNonNullDateRange(largeDaterange);
    const isSmallDateRangeNonNull = isNonNullDateRange(smallDateRange);

    // 両方の範囲がnullでないかどうか
    const isBothRangeNoNNull =
      isLargeDaterangeNonNull && isSmallDateRangeNonNull;

    // どちらかの範囲にnullが含まれている場合はfalse、大きい範囲が小さい範囲を含んでいる場合はOK
    const isOk = !isBothRangeNoNNull
      ? true
      : isDateRangeWithin(largeDaterange)(smallDateRange);

    return {
      key,
      input: {
        largeDaterange,
        smallDateRange,
      },
      isOk,
      errorMessage,
    };
  };
