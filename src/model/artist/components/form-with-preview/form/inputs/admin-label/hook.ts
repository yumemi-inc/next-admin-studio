import { useArtistFormStore } from "../../../store/hook";

export const useArtistAdminLabelInput = () => {
  const value = useArtistFormStore((state) => state.adminLabel);
  const setValue = useArtistFormStore((state) => state.setAdminLabel);
  const validationPhase = useArtistFormStore((state) => state.validationPhase);
  const getErrorMessages = useArtistFormStore(
    (state) => state.getAdminLabelErrorMessages,
  );

  const errorMessages = getErrorMessages(value, validationPhase);

  return { value, setValue, errorMessages };
};
