import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import {
  validateArtworkOpenAtOnChange,
  validateArtworkOpenAtOnSubmit,
} from "./validation";

export type ArtworkOpenAtSlice = {
  openAt: Date | null;
  setOpenAt: (openAt: Date | null) => void;
  getOpenAtErrorMessages: (
    value: Date | null,
    phase: ValidationPhase,
  ) => string[];
  getOpenAtIsValid: () => boolean;
};

export const createArtworkOpenAtSlice: FormInputSliceCreater<
  ArtworkOpenAtSlice,
  { openAt: Date | null }
> = (initalValue) => (set, get) => ({
  openAt: initalValue.openAt,
  setOpenAt: (openAt) => set({ openAt }),
  getOpenAtErrorMessages: (value, phase) => {
    return getValidationtErrorMessage({
      phase,
      validations: {
        onChange: validateArtworkOpenAtOnChange(value),
        onConfirmedSubmit: validateArtworkOpenAtOnSubmit(value),
      },
    });
  },
  getOpenAtIsValid: () => {
    const value = get().openAt;
    const phase = get().validationPhase;
    const errorMessages = get().getOpenAtErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
