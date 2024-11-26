import { notEmptyCheckboxGroupInputValidation } from "@/common/lib/form-validation/checkbox-group-input";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";

export const validateArtworkConditionOnSubmit: MultiValidationFn<string[]> = (
  v,
) => [notEmptyCheckboxGroupInputValidation(v)];

export const validateArtworkConditionOnChange: MultiValidationFn<string[]> = (
  _v,
) => [];
