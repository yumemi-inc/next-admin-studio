import { notEmptyNumberInputValidation } from "@/common/lib/form-validation/number-input";
import type { MultiValidationFn } from "@/common/lib/form-validation/type";

export const validateArtworkAuctionStartPriceOnSubmit: MultiValidationFn<
  number | string
> = (v) => [notEmptyNumberInputValidation(v)];

export const validateArtworkAuctionStartPriceOnChange: MultiValidationFn<
  number | string
> = (_v) => [];
