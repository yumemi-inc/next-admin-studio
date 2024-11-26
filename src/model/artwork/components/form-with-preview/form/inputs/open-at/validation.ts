import { notEmptyDateValidation } from "@/common/lib/form-validation/date-input";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";

export const validateArtworkOpenAtOnSubmit: MultiValidationFn<Date | null> = (
  v,
) => [notEmptyDateValidation(v)];

export const validateArtworkOpenAtOnChange: MultiValidationFn<Date | null> = (
  _v,
) => [];
