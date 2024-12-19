import { notEmptySelectValidation } from "@/common/lib/form-validation/select";
import type { InputValidation } from "@/model/common/lib/validation";

export const artworkArtistValidation = (v: string | null): InputValidation => ({
  onConfirmedSubmit: [notEmptySelectValidation(v)],
});
