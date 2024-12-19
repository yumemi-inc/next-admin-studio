import {
  maxLengthValidation,
  notEmptyInputValidation,
} from "@/common/lib/form-validation/text-input";
import type { InputValidation } from "@/model/common/lib/validation";

export const artistAdminLabelValidation = (v: string): InputValidation => ({
  onChange: [maxLengthValidation(100)(v)],
  onConfirmedSubmit: [notEmptyInputValidation(v)],
});
