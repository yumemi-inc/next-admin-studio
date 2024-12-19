import {
  type ValidationPhase,
  getValidationErrorMessage,
} from "@/model/common/lib/validation";
import type { FormInputSliceCreater } from "@/model/common/store/form";
import { artworkArtistValidation } from "./validation";

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
    return getValidationErrorMessage({
      phase,
      validations: artworkArtistValidation(value),
    });
  },
  getArtistIsValid: () => {
    const value = get().artist;
    const phase = get().validationPhase;
    const errorMessages = get().getArtistErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
