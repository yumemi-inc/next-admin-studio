import { notEmptyCheckboxGroupInputValidation } from "@/common/lib/form-validation/checkbox-group-input";
import type { InputValidation } from "@/model/common/lib/validation";

export const artworkConditionValidation = (v: string[]): InputValidation => ({
  onConfirmedSubmit: [notEmptyCheckboxGroupInputValidation(v)],
});
