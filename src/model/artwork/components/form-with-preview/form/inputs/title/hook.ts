import { useArtworkFormStore } from "../../../store/hook";

export const useArtworkTitleInput = () => {
  const value = useArtworkFormStore((state) => state.title);
  const setValue = useArtworkFormStore((state) => state.setTitle);
  const validationPhase = useArtworkFormStore((state) => state.validationPhase);
  const getErrorMessages = useArtworkFormStore(
    (state) => state.getTitleErrorMessages,
  );

  const errorMessages = getErrorMessages(value, validationPhase);

  return { value, setValue, errorMessages };
};
