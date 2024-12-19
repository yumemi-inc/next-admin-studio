import { notEmptyInputValidation } from "@/common/lib/form-validation/radio-button-group-input";
import type { InputValidation } from "@/model/common/lib/validation";

export const artworkSalesStyleValidation = (v: string): InputValidation => ({
  onConfirmedSubmit: [notEmptyInputValidation(v)],
});
