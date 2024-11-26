import {
  type ValidationPhase,
  getValidationtErrorMessage,
} from "@/model/common/lib/get-validation-error-message";
import type { FormInputSliceCreater } from "@/model/common/store/form";

import {
  validateArtistAdminLabelOnChange,
  validateArtistAdminLabelOnSubmit,
} from "./validation";

export type ArtistAdminLabelSlice = {
  adminLabel: string;
  setAdminLabel: (adminLabel: string) => void;
  getAdminLabelErrorMessages: (
    value: string,
    phase: ValidationPhase,
  ) => string[];
  getAdminLabelIsValid: () => boolean;
};

export const createAdminLabelSlice: FormInputSliceCreater<
  ArtistAdminLabelSlice,
  { adminLabel: string }
> = (initalValue) => (set, get) => ({
  adminLabel: initalValue.adminLabel,
  setAdminLabel: (adminLabel) => set({ adminLabel }),
  getAdminLabelErrorMessages: (value, phase) => {
    return getValidationtErrorMessage({
      phase,
      validations: {
        onChange: validateArtistAdminLabelOnChange(value),
        onConfirmedSubmit: validateArtistAdminLabelOnSubmit(value),
      },
    });
  },
  getAdminLabelIsValid: () => {
    const value = get().adminLabel;
    const phase = get().validationPhase;
    const errorMessages = get().getAdminLabelErrorMessages(value, phase);
    return errorMessages.length === 0;
  },
});
