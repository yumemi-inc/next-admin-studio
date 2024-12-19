import { notEmptyNumberInputValidation } from "@/common/lib/form-validation/number-input";
import type { InputValidation } from "@/model/common/lib/validation";

export const artworkSalesStyleAuctionStartingPriceValidation = (
  v: number | string,
): InputValidation => ({
  onConfirmedSubmit: [notEmptyNumberInputValidation(v)],
});
