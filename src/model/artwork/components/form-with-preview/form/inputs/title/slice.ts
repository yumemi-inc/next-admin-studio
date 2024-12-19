import {
  type ValidationPhase,
  getValidationErrorMessage,
} from "@/model/common/lib/validation";
import type { FormInputSliceCreater } from "@/model/common/store/form";
import { artworkTitleValidation } from "./validation";

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
    return getValidationErrorMessage({
      phase,
      validations: artworkTitleValidation(value),
    });
  },
  getTitleIsValid: () => {
    const value = get().title;
    const phase = get().validationPhase;
    const errorMessages = get().getTitleErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
