import { notEmptyTagsInputValidation } from "@/common/lib/form-validation/tags-input";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";

export const validateArtistTagsOnSubmit: MultiValidationFn<string[]> = (v) => [
  notEmptyTagsInputValidation(v),
];

export const validateArtistTagsOnChange: MultiValidationFn<string[]> = (
  _v,
) => [];
