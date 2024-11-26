import { notEmptyNumberInputValidation } from "@/common/lib/form-validation/number-input";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";

export const validateArtworkAuctionStartingPriceOnSubmit: MultiValidationFn<
  number | string
> = (v) => [notEmptyNumberInputValidation(v)];

export const validateArtworkAuctionStartingPriceOnChange: MultiValidationFn<
  number | string
> = (_v) => [];
