import {
  type ValidationPhase,
  getValidationErrorMessage,
} from "@/model/common/lib/validation";
import type { FormInputSliceCreater } from "@/model/common/store/form";
import { artworkDescriptionValidation } from "./validation";

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
    return getValidationErrorMessage({
      phase,
      validations: artworkDescriptionValidation(value),
    });
  },
  getDescriptionIsValid: () => {
    const value = get().description;
    const phase = get().validationPhase;
    const errorMessages = get().getDescriptionErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
