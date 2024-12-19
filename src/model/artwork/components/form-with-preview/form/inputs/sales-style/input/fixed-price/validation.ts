import { notEmptyNumberInputValidation } from "@/common/lib/form-validation/number-input";
import type { InputValidation } from "@/model/common/lib/validation";

export const artworkSalesStyleFixedPriceValidation = (
  v: number | string,
): InputValidation => ({
  onConfirmedSubmit: [notEmptyNumberInputValidation(v)],
});
