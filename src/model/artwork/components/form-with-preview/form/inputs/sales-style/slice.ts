import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import {
  validateArtworkSalesStyleOnChange,
  validateArtworkSalesStyleOnSubmit,
} from "./validation";

export type ArtworkSalesStyleSlice = {
  salesStyle: string;
  setSalesStyle: (salesStyle: string) => void;
  getSalesStyleErrorMessages: (
    value: string,
    phase: ValidationPhase,
  ) => string[];
  getSalesStyleIsValid: () => boolean;
};

export const createArtworkSalesStyleSlice: FormInputSliceCreater<
  ArtworkSalesStyleSlice,
  { salesStyle: string }
> = (initalValue) => (set, get) => ({
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
});
