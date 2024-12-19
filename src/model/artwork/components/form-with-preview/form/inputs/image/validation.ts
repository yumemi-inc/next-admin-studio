import { notEmptyFileInputValidation } from "@/common/lib/form-validation/file-input";
import type { InputValidation } from "@/model/common/lib/validation";

export const artworkImageValidation = (v: string): InputValidation => ({
  onConfirmedSubmit: [notEmptyFileInputValidation(v)],
});
