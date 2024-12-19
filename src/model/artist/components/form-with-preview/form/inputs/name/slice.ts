import {
  type ValidationPhase,
  getValidationErrorMessage,
} from "@/model/common/lib/validation";
import type { FormInputSliceCreater } from "@/model/common/store/form";
import { artistNameValidation } from "./validation";

export type ArtistNameSlice = {
  name: string;
  setName: (name: string) => void;
  getNameErrorMessages: (value: string, phase: ValidationPhase) => string[];
  getNameIsValid: () => boolean;
};

export const createArtistNameSlice: FormInputSliceCreater<
  ArtistNameSlice,
  { name: string }
> = (initalValue) => (set, get) => ({
  name: initalValue.name,
  setName: (name) => set({ name }),
  getNameErrorMessages: (value, phase) => {
    return getValidationErrorMessage({
      phase,
      validations: artistNameValidation(value),
    });
  },
  getNameIsValid: () => {
    const value = get().name;
    const phase = get().validationPhase;
    const errorMessages = get().getNameErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
