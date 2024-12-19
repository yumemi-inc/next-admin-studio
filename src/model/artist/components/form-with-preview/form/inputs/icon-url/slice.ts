import {
  type ValidationPhase,
  getValidationErrorMessage,
} from "@/model/common/lib/validation";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import { artistIconUrlValidation } from "./validation";

export type ArtistIconUrlSlice = {
  iconUrl: string;
  setIconUrl: (iconUrl: string) => void;
  getIconUrlErrorMessages: (value: string, phase: ValidationPhase) => string[];
  getIconUrlIsValid: () => boolean;
};

export const createArtistIconUrlSlice: FormInputSliceCreater<
  ArtistIconUrlSlice,
  { iconUrl: string }
> = (initalValue) => (set, get) => ({
  iconUrl: initalValue.iconUrl,
  setIconUrl: (iconUrl) => set({ iconUrl }),
  getIconUrlErrorMessages: (value, phase) => {
    return getValidationErrorMessage({
      phase,
      validations: artistIconUrlValidation(value),
    });
  },
  getIconUrlIsValid: () => {
    const value = get().iconUrl;
    const phase = get().validationPhase;
    const errorMessages = get().getIconUrlErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
