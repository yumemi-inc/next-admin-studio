import type { ValidationPhase } from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

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
import {} from "./validation";

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
    return value === "AUCTION"
      ? get().getAuctionStartingPriceErrorMessages(
          get().auctionStartingPrice,
          phase,
        )
      : get().getFixedPriceErrorMessages(get().fixedPrice, phase);
  },
  getSalesStyleIsValid: () => {
    const value = get().salesStyle;
    const phase = get().validationPhase;
    const errorMessages = get().getSalesStyleErrorMessages(value, phase);
    return errorMessages.length === 0;
  },

  ...createArtworkFixedPriceSlice(initalValue)(set, get, store),
  ...createArtworkAuctionStartingPriceSlice(initalValue)(set, get, store),
});
