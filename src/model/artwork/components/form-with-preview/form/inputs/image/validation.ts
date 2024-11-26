import { notEmptyFileInputValidation } from "@/common/lib/form-validation/file-input";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";

export const validateArtworkImageOnSubmit: MultiValidationFn<string> = (v) => [
  notEmptyFileInputValidation(v),
];

export const validateArtworkImageOnChange: MultiValidationFn<string> = (
  _v,
) => [];
