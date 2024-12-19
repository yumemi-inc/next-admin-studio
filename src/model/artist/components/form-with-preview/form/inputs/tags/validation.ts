import { notEmptyTagsInputValidation } from "@/common/lib/form-validation/tags-input";
import type { InputValidation } from "@/model/common/lib/validation";

export const artistTagsValidation = (v: string[]): InputValidation => ({
  onConfirmedSubmit: [notEmptyTagsInputValidation(v)],
});
