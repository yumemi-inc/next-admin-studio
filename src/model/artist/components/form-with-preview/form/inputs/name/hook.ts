import { useArtistFormStore } from "../../../store/hook";

export const useArtistNameInput = () => {
  const value = useArtistFormStore((state) => state.name);
  const setValue = useArtistFormStore((state) => state.setName);
  const validationPhase = useArtistFormStore((state) => state.validationPhase);
  const getErrorMessages = useArtistFormStore(
    (state) => state.getNameErrorMessages,
  );

  const errorMessages = getErrorMessages(value, validationPhase);

  return { value, setValue, errorMessages };
};
