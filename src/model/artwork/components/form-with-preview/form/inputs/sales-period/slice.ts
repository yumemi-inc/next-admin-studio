import {
  type ValidationPhase,
  getValidationErrorMessage,
} from "@/model/common/lib/validation";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import type { NullableDateRange } from "@/common/components/form/date-time-range-input/type";
import { artworkSalesPeriodValidation } from "./validation";

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
    return getValidationErrorMessage({
      phase,
      validations: artworkSalesPeriodValidation(value),
    });
  },
  getSalesPeriodIsValid: () => {
    const value = get().salesPeriod;
    const phase = get().validationPhase;
    const errorMessages = get().getSalesPeriodErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
