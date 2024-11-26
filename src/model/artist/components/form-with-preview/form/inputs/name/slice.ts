import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import {
  validateArtistNameOnChange,
  validateArtistNameOnSubmit,
} from "./validation";

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
    return getValidationtErrorMessage({
      phase,
      validations: {
        onChange: validateArtistNameOnChange(value),
        onConfirmedSubmit: validateArtistNameOnSubmit(value),
      },
    });
  },
  getNameIsValid: () => {
    const value = get().name;
    const phase = get().validationPhase;
    const errorMessages = get().getNameErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
