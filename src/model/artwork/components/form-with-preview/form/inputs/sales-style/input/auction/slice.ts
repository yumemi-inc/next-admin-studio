import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import {
  validateArtworkAuctionStartPriceOnChange,
  validateArtworkAuctionStartPriceOnSubmit,
} from "./validation";

export type ArtworkAuctionStartPriceInputSlice = {
  // オークションの開始価格
  auctionStartPrice: number;
};

export type ArtworkAuctionStartPriceSetterSlice = {
  // オークションの開始価格のsetter
  setAuctionStartPrice: (auctionStartPrice: number) => void;
};

export type ArtworkAuctionStartPriceSlice = ArtworkAuctionStartPriceInputSlice &
  ArtworkAuctionStartPriceSetterSlice & {
    getAuctionStartPriceErrorMessages: (
      value: number | string,
      phase: ValidationPhase,
    ) => string[];
    getAuctionStartPriceIsValid: () => boolean;
  };

export const createArtworkAuctionStartPriceSlice: FormInputSliceCreater<
  ArtworkAuctionStartPriceSlice,
  ArtworkAuctionStartPriceInputSlice
> = (initalValue) => (set, get) => ({
  auctionStartPrice: initalValue.auctionStartPrice,

  setAuctionStartPrice: (auctionStartPrice) => set({ auctionStartPrice }),
  getAuctionStartPriceErrorMessages: (value, phase) => {
    return getValidationtErrorMessage({
      phase,
      validations: {
        onChange: validateArtworkAuctionStartPriceOnChange(value),
        onConfirmedSubmit: validateArtworkAuctionStartPriceOnSubmit(value),
      },
    });
  },
  getAuctionStartPriceIsValid: () => {
    const value = get().auctionStartPrice;
    const phase = get().validationPhase;
    const errorMessages = get().getAuctionStartPriceErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
