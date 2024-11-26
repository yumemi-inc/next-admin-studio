import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import { match } from "ts-pattern";
import {
  type ArtworkAuctionStartingPriceInputSlice,
  type ArtworkAuctionStartingPriceSetterSlice,
  type ArtworkAuctionStartingPriceSlice,
  createArtworkAuctionStartingPriceSlice,
} from "./input/auction/slice";
import {
  type ArtworkFixedPriceInputSlice,
  type ArtworkFixedPriceSetterSlice,
  type ArtworkFixedPriceSlice,
  createArtworkFixedPriceSlice,
} from "./input/fixed-price/slice";
import type { ArtworkSalesStyle } from "./type";
import {
  validateArtworkSalesStyleOnChange,
  validateArtworkSalesStyleOnSubmit,
} from "./validation";

export type ArtworkSalesStyleInputSlice = {
  // 販売方式
  salesStyle: ArtworkSalesStyle;
} & ArtworkFixedPriceInputSlice &
  ArtworkAuctionStartingPriceInputSlice;

export type ArtworkSalesStyleSetterSlice = {
  // 販売方式のsetter
  setSalesStyle: (salesStyle: ArtworkSalesStyle) => void;
} & ArtworkFixedPriceSetterSlice &
  ArtworkAuctionStartingPriceSetterSlice;
export type ArtworkSalesStyleSlice = ArtworkSalesStyleInputSlice &
  ArtworkSalesStyleSetterSlice & {
    getSalesStyleErrorMessages: (
      value: ArtworkSalesStyle,
      phase: ValidationPhase,
    ) => string[];
    getSalesStyleIsValid: () => boolean;
  } & ArtworkAuctionStartingPriceSlice &
  ArtworkFixedPriceSlice;

export const createArtworkSalesStyleSlice: FormInputSliceCreater<
  ArtworkSalesStyleSlice,
  ArtworkSalesStyleInputSlice
> = (initalValue) => (set, get, store) => ({
  salesStyle: initalValue.salesStyle,
  setSalesStyle: (salesStyle) => set({ salesStyle }),
  getSalesStyleErrorMessages: (value, phase) => {
    return getValidationtErrorMessage({
      phase,
      validations: {
        onChange: validateArtworkSalesStyleOnChange(value),
        onConfirmedSubmit: validateArtworkSalesStyleOnSubmit(value),
      },
    });
  },
  getSalesStyleIsValid: () => {
    const salesStyle = get().salesStyle;
    const phase = get().validationPhase;
    const errorMessagesOnSalesStyle = get().getSalesStyleErrorMessages(
      salesStyle,
      phase,
    );

    if (errorMessagesOnSalesStyle.length !== 0) return false;

    return match(salesStyle)
      .with("AUCTION", () => get().getAuctionStartingPriceIsValid())
      .with("FIXED_PRICE", () => get().getFixedPriceIsValid())
      .exhaustive();
  },

  ...createArtworkFixedPriceSlice(initalValue)(set, get, store),
  ...createArtworkAuctionStartingPriceSlice(initalValue)(set, get, store),
});
