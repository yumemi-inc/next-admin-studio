import {
  type ValidationPhase,
  getValidationErrorMessage,
} from "@/model/common/lib/validation";
import type { FormInputSliceCreater } from "@/model/common/store/form";
import { artworkSalesStyleAuctionStartingPriceValidation } from "./validation";

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
    return getValidationErrorMessage({
      phase,
      validations: artworkSalesStyleAuctionStartingPriceValidation(value),
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
