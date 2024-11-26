import { notEmptyInputValidation } from "@/common/lib/form-validation/radio-button-group-input";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";

export const validateArtworkSalesStyleOnSubmit: MultiValidationFn<string> = (
  v,
) => [notEmptyInputValidation(v)];

export const validateArtworkSalesStyleOnChange: MultiValidationFn<string> = (
  _v,
) => [];
