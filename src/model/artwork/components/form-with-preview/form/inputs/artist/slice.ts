import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import {
  validateArtworkArtistOnChange,
  validateArtworkArtistOnSubmit,
} from "./validation";

export type ArtworkArtistSlice = {
  artist: string | null;
  setArtist: (artist: string | null) => void;
  getArtistErrorMessages: (
    value: string | null,
    phase: ValidationPhase,
  ) => string[];
  getArtistIsValid: () => boolean;
};

export const createArtworkArtistSlice: FormInputSliceCreater<
  ArtworkArtistSlice,
  { artist: string | null }
> = (initalValue) => (set, get) => ({
  artist: initalValue.artist,
  setArtist: (artist) => set({ artist }),
  getArtistErrorMessages: (value, phase) => {
    return getValidationtErrorMessage({
      phase,
      validations: {
        onChange: validateArtworkArtistOnChange(value),
        onConfirmedSubmit: validateArtworkArtistOnSubmit(value),
      },
    });
  },
  getArtistIsValid: () => {
    const value = get().artist;
    const phase = get().validationPhase;
    const errorMessages = get().getArtistErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
