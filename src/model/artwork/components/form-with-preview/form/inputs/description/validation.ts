import {
  maxLengthValidation,
  notEmptyInputValidation,
} from "@/common/lib/form-validation/text-input";
import type { InputValidation } from "@/model/common/lib/validation";

export const artworkDescriptionValidation = (v: string): InputValidation => ({
  onChange: [maxLengthValidation(500)(v)],
  onConfirmedSubmit: [notEmptyInputValidation(v)],
});
