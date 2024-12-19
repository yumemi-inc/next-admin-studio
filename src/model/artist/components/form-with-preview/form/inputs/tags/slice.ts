import {
  type ValidationPhase,
  getValidationErrorMessage,
} from "@/model/common/lib/validation";
import type { FormInputSliceCreater } from "@/model/common/store/form";
import { artistTagsValidation } from "./validation";

export type ArtistTagsSlice = {
  tags: string[];
  setTags: (tags: string[]) => void;
  getTagsErrorMessages: (value: string[], phase: ValidationPhase) => string[];
  getTagsIsValid: () => boolean;
};

export const createArtistTagsSlice: FormInputSliceCreater<
  ArtistTagsSlice,
  { tags: string[] }
> = (initalValue) => (set, get) => ({
  tags: initalValue.tags,
  setTags: (tags) => set({ tags }),
  getTagsErrorMessages: (value, phase) => {
    return getValidationErrorMessage({
      phase,
      validations: artistTagsValidation(value),
    });
  },
  getTagsIsValid: () => {
    const value = get().tags;
    const phase = get().validationPhase;
    const errorMessages = get().getTagsErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
