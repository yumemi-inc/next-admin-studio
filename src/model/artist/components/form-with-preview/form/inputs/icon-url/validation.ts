import {
  maxLengthValidation,
  notEmptyInputValidation,
  urlValidation,
} from "@/common/lib/form-validation/text-input";
import type { InputValidation } from "@/model/common/lib/validation";

export const artistIconUrlValidation = (v: string): InputValidation => ({
  onChange: [maxLengthValidation(1000)(v)],
  onConfirmedSubmit: [notEmptyInputValidation(v), urlValidation(v)],
});
