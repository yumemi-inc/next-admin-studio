import { notEmptyDateValidation } from "@/common/lib/form-validation/date-input";
import type { InputValidation } from "@/model/common/lib/validation";

export const artworkOpenAtValidation = (v: Date | null): InputValidation => ({
  onConfirmedSubmit: [notEmptyDateValidation(v)],
});
