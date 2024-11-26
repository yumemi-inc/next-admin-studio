import type { NullableDateRange } from "@/common/components/form/date-time-range-input/type";
import {
  notEmptyEndDateValidation,
  notEmptyStartDateValidation,
  startDateIsBeforeEndDateValidation,
} from "@/common/lib/form-validation/date-range-input";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";

export const validateArtworkSalesPeriodOnSubmit: MultiValidationFn<
  NullableDateRange
> = (v) => [notEmptyStartDateValidation()(v), notEmptyEndDateValidation()(v)];

export const validateArtworkSalesPeriodOnChange: MultiValidationFn<
  NullableDateRange
> = (v) => [startDateIsBeforeEndDateValidation()(v)];
