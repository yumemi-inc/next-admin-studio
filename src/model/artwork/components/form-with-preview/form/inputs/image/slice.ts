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
  image: {
    file: File | null;
    url: string;
  };
  setImage: (image: { file: File | null; url: string }) => void;
  getImageErrorMessages: (value: string, phase: ValidationPhase) => string[];
  getImageIsValid: () => boolean;
};

export const createArtworkImageSlice: FormInputSliceCreater<
  ArtworkImageSlice,
  {
    image: {
      file: File | null;
      url: string;
    };
  }
> = (initalValue) => (set, get) => ({
  image: initalValue.image,
  setImage: (image) => set({ image }),
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
    const value = get().image.url;
    const phase = get().validationPhase;
    const errorMessages = get().getImageErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
