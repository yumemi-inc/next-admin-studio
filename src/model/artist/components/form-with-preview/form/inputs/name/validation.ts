import {
  maxLengthValidation,
  notEmptyInputValidation,
} from "@/common/lib/form-validation/text-input";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";

export const validateArtistNameOnSubmit: MultiValidationFn<string> = (v) => [
  notEmptyInputValidation(v),
];

export const validateArtistNameOnChange: MultiValidationFn<string> = (v) => [
  maxLengthValidation(100)(v),
];
