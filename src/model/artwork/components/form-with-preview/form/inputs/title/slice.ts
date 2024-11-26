import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import {
  validateArtworkTitleOnChange,
  validateArtworkTitleOnSubmit,
} from "./validation";

export type ArtworkTitleSlice = {
  title: string;
  setTitle: (title: string) => void;
  getTitleErrorMessages: (value: string, phase: ValidationPhase) => string[];
  getTitleIsValid: () => boolean;
};

export const createArtworkTitleSlice: FormInputSliceCreater<
  ArtworkTitleSlice,
  { title: string }
> = (initalValue) => (set, get) => ({
  title: initalValue.title,
  setTitle: (title) => set({ title }),
  getTitleErrorMessages: (value, phase) => {
    return getValidationtErrorMessage({
      phase,
      validations: {
        onChange: validateArtworkTitleOnChange(value),
        onConfirmedSubmit: validateArtworkTitleOnSubmit(value),
      },
    });
  },
  getTitleIsValid: () => {
    const value = get().title;
    const phase = get().validationPhase;
    const errorMessages = get().getTitleErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
