import { notEmptySelectValidation } from "@/common/lib/form-validation/select";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";

export const validateArtworkArtistOnSubmit: MultiValidationFn<string | null> = (
  v,
) => [notEmptySelectValidation(v)];

export const validateArtworkArtistOnChange: MultiValidationFn<string | null> = (
  _v,
) => [];
