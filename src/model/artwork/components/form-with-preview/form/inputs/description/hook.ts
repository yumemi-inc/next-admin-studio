import { useArtworkFormStore } from "../../../store/hook";

export const useArtworkDescriptionInput = () => {
  const value = useArtworkFormStore((state) => state.description);
  const setValue = useArtworkFormStore((state) => state.setDescription);
  const validationPhase = useArtworkFormStore((state) => state.validationPhase);
  const getErrorMessages = useArtworkFormStore(
    (state) => state.getDescriptionErrorMessages,
  );

  const errorMessages = getErrorMessages(value, validationPhase);

  return { value, setValue, errorMessages };
};
