import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import {
  validateArtworkImageOnChange,
  validateArtworkImageOnSubmit,
} from "./validation";

export type ArtworkImageSlice = {
  imageUrl: string;
  imageFile: File | null;
  setImageUrl: (imageUrl: string) => void;
  setImageFile: (imageFile: File | null) => void;
  getImageErrorMessages: (value: string, phase: ValidationPhase) => string[];
  getImageIsValid: () => boolean;
};

export const createArtworkImageSlice: FormInputSliceCreater<
  ArtworkImageSlice,
  { imageUrl: string; imageFile: File | null }
> = (initalValue) => (set, get) => ({
  imageUrl: initalValue.imageUrl,
  imageFile: initalValue.imageFile,
  setImageUrl: (imageUrl) => set({ imageUrl }),
  setImageFile: (imageFile) => set({ imageFile }),
  getImageErrorMessages: (value, phase) => {
    return getValidationtErrorMessage({
      phase,
      validations: {
        onChange: validateArtworkImageOnChange(value),
        onConfirmedSubmit: validateArtworkImageOnSubmit(value),
      },
    });
  },
  getImageIsValid: () => {
    const value = get().imageUrl;
    const phase = get().validationPhase;
    const errorMessages = get().getImageErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
