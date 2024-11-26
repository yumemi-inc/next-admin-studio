import { useArtworkFormStore } from "../../../store/hook";

export const useArtworkAdminLabelInput = () => {
  const value = useArtworkFormStore((state) => state.adminLabel);
  const setValue = useArtworkFormStore((state) => state.setAdminLabel);
  const validationPhase = useArtworkFormStore((state) => state.validationPhase);
  const getErrorMessages = useArtworkFormStore(
    (state) => state.getAdminLabelErrorMessages,
  );

  const errorMessages = getErrorMessages(value, validationPhase);

  return { value, setValue, errorMessages };
};
