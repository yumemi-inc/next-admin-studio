import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import {
  validateArtworkAuctionStartingPriceOnChange,
  validateArtworkAuctionStartingPriceOnSubmit,
} from "./validation";

export type ArtworkAuctionStartingPriceInputSlice = {
  auctionStartingPrice: number;
};

export type ArtworkAuctionStartingPriceSetterSlice = {
  setAuctionStartingPrice: (auctionStartingPrice: number) => void;
};

export type ArtworkAuctionStartingPriceSlice =
  ArtworkAuctionStartingPriceInputSlice &
    ArtworkAuctionStartingPriceSetterSlice & {
      getAuctionStartingPriceErrorMessages: (
        value: number | string,
        phase: ValidationPhase,
      ) => string[];
      getAuctionStartingPriceIsValid: () => boolean;
    };

export const createArtworkAuctionStartingPriceSlice: FormInputSliceCreater<
  ArtworkAuctionStartingPriceSlice,
  ArtworkAuctionStartingPriceInputSlice
> = (initalValue) => (set, get) => ({
  auctionStartingPrice: initalValue.auctionStartingPrice,

  setAuctionStartingPrice: (auctionStartingPrice) =>
    set({ auctionStartingPrice }),
  getAuctionStartingPriceErrorMessages: (value, phase) => {
    return getValidationtErrorMessage({
      phase,
      validations: {
        onChange: validateArtworkAuctionStartingPriceOnChange(value),
        onConfirmedSubmit: validateArtworkAuctionStartingPriceOnSubmit(value),
      },
    });
  },
  getAuctionStartingPriceIsValid: () => {
    const value = get().auctionStartingPrice;
    const phase = get().validationPhase;
    const errorMessages = get().getAuctionStartingPriceErrorMessages(
      value,
      phase,
    );
    return errorMessages.length === 0;
  },
});
