import { notEmptyNumberInputValidation } from "@/common/lib/form-validation/number-input";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";

export const validateArtworkFixedPriceOnSubmit: MultiValidationFn<
  number | string
> = (v) => [notEmptyNumberInputValidation(v)];

export const validateArtworkFixedPriceOnChange: MultiValidationFn<
  number | string
> = (_v) => [];
