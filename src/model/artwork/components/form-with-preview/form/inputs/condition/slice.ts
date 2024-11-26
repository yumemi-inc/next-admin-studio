import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import {
  validateArtworkConditionOnChange,
  validateArtworkConditionOnSubmit,
} from "./validation";

export type ArtworkConditionSlice = {
  condition: string[];
  setCondition: (condition: string[]) => void;
  getConditionErrorMessages: (
    value: string[],
    phase: ValidationPhase,
  ) => string[];
  getConditionIsValid: () => boolean;
};

export const createArtworkConditionSlice: FormInputSliceCreater<
  ArtworkConditionSlice,
  { condition: string[] }
> = (initalValue) => (set, get) => ({
  condition: initalValue.condition,
  setCondition: (condition) => set({ condition }),
  getConditionErrorMessages: (value, phase) => {
    return getValidationtErrorMessage({
      phase,
      validations: {
        onChange: validateArtworkConditionOnChange(value),
        onConfirmedSubmit: validateArtworkConditionOnSubmit(value),
      },
    });
  },
  getConditionIsValid: () => {
    const value = get().condition;
    const phase = get().validationPhase;
    const errorMessages = get().getConditionErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
