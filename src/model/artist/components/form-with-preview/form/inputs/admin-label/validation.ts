import {
  maxLengthValidation,
  notEmptyInputValidation,
} from "@/common/lib/form-validation/text-input";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";

export const validateArtistAdminLabelOnSubmit: MultiValidationFn<string> = (
  v,
) => [notEmptyInputValidation(v)];

export const validateArtistAdminLabelOnChange: MultiValidationFn<string> = (
  v,
) => [maxLengthValidation(100)(v)];
