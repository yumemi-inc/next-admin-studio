import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import {
  type ArtworkAuctionStartPriceInputSlice,
  type ArtworkAuctionStartPriceSetterSlice,
  type ArtworkAuctionStartPriceSlice,
  createArtworkAuctionStartPriceSlice,
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
  ArtworkAuctionStartPriceInputSlice;

export type ArtworkSalesStyleSetterSlice = {
  // 販売方式のsetter
  setSalesStyle: (salesStyle: ArtworkSalesStyle) => void;
} & ArtworkFixedPriceSetterSlice &
  ArtworkAuctionStartPriceSetterSlice;
export type ArtworkSalesStyleSlice = ArtworkSalesStyleInputSlice &
  ArtworkSalesStyleSetterSlice & {
    getSalesStyleErrorMessages: (
      value: string,
      phase: ValidationPhase,
    ) => string[];
    getSalesStyleIsValid: () => boolean;
  } & ArtworkAuctionStartPriceSlice &
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
    const value = get().salesStyle;
    const phase = get().validationPhase;
    const errorMessages = get().getSalesStyleErrorMessages(value, phase);
    return errorMessages.length === 0;
  },

  ...createArtworkFixedPriceSlice(initalValue)(set, get, store),
  ...createArtworkAuctionStartPriceSlice(initalValue)(set, get, store),
});
