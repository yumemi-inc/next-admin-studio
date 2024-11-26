import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import type { NullableDateRange } from "@/common/components/form/date-time-range-input/type";

import {
  validateArtworkSalesPeriodOnChange,
  validateArtworkSalesPeriodOnSubmit,
} from "./validation";

export type ArtworkSalesPeriodSlice = {
  salesPeriod: NullableDateRange;
  setSalesPeriod: (salesPeriod: NullableDateRange) => void;
  getSalesPeriodErrorMessages: (
    value: NullableDateRange,
    phase: ValidationPhase,
  ) => string[];
  getSalesPeriodIsValid: () => boolean;
};

export const createArtworkSalesPeriodSlice: FormInputSliceCreater<
  ArtworkSalesPeriodSlice,
  { salesPeriod: NullableDateRange }
> = (initalValue) => (set, get) => ({
  salesPeriod: initalValue.salesPeriod,
  setSalesPeriod: (salesPeriod) => set({ salesPeriod }),
  getSalesPeriodErrorMessages: (value, phase) => {
    return getValidationtErrorMessage({
      phase,
      validations: {
        onChange: validateArtworkSalesPeriodOnChange(value),
        onConfirmedSubmit: validateArtworkSalesPeriodOnSubmit(value),
      },
    });
  },
  getSalesPeriodIsValid: () => {
    const value = get().salesPeriod;
    const phase = get().validationPhase;
    const errorMessages = get().getSalesPeriodErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
