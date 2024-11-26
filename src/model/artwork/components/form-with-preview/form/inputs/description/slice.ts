import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import {
  validateArtworkDescriptionOnChange,
  validateArtworkDescriptionOnSubmit,
} from "./validation";

export type ArtworkDescriptionSlice = {
  description: string;
  setDescription: (description: string) => void;
  getDescriptionErrorMessages: (
    value: string,
    phase: ValidationPhase,
  ) => string[];
  getDescriptionIsValid: () => boolean;
};

export const createArtworkDescriptionSlice: FormInputSliceCreater<
  ArtworkDescriptionSlice,
  { description: string }
> = (initalValue) => (set, get) => ({
  description: initalValue.description,
  setDescription: (description) => set({ description }),
  getDescriptionErrorMessages: (value, phase) => {
    return getValidationtErrorMessage({
      phase,
      validations: {
        onChange: validateArtworkDescriptionOnChange(value),
        onConfirmedSubmit: validateArtworkDescriptionOnSubmit(value),
      },
    });
  },
  getDescriptionIsValid: () => {
    const value = get().description;
    const phase = get().validationPhase;
    const errorMessages = get().getDescriptionErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
