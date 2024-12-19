import {
  type ValidationPhase,
  getValidationErrorMessage,
} from "@/model/common/lib/validation";
import type { FormInputSliceCreater } from "@/model/common/store/form";
import { artworkImageValidation } from "./validation";

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
    return getValidationErrorMessage({
      phase,
      validations: artworkImageValidation(value),
    });
  },
  getImageIsValid: () => {
    const value = get().image.url;
    const phase = get().validationPhase;
    const errorMessages = get().getImageErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
