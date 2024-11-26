import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import {
  validateArtworkFixedPriceOnChange,
  validateArtworkFixedPriceOnSubmit,
} from "./validation";

export type ArtworkFixedPriceInputSlice = {
  fixedPrice: number;
};

export type ArtworkFixedPriceSetterSlice = {
  setFixedPrice: (fixedPrice: number) => void;
};

export type ArtworkFixedPriceSlice = ArtworkFixedPriceInputSlice &
  ArtworkFixedPriceSetterSlice & {
    getFixedPriceErrorMessages: (
      value: number | string,
      phase: ValidationPhase,
    ) => string[];
    getFixedPriceIsValid: () => boolean;
  };

export const createArtworkFixedPriceSlice: FormInputSliceCreater<
  ArtworkFixedPriceSlice,
  ArtworkFixedPriceInputSlice
> = (initalValue) => (set, get) => ({
  fixedPrice: initalValue.fixedPrice,

  setFixedPrice: (fixedPrice) => set({ fixedPrice }),
  getFixedPriceErrorMessages: (value, phase) => {
    return getValidationtErrorMessage({
      phase,
      validations: {
        onChange: validateArtworkFixedPriceOnChange(value),
        onConfirmedSubmit: validateArtworkFixedPriceOnSubmit(value),
      },
    });
  },
  getFixedPriceIsValid: () => {
    const value = get().fixedPrice;
    const phase = get().validationPhase;
    const errorMessages = get().getFixedPriceErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
