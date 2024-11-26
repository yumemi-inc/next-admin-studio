import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import {
  validateArtistTagsOnChange,
  validateArtistTagsOnSubmit,
} from "./validation";

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
    return getValidationtErrorMessage({
      phase,
      validations: {
        onChange: validateArtistTagsOnChange(value),
        onConfirmedSubmit: validateArtistTagsOnSubmit(value),
      },
    });
  },
  getTagsIsValid: () => {
    const value = get().tags;
    const phase = get().validationPhase;
    const errorMessages = get().getTagsErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
