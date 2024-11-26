import { useArtworkFormStore } from "../../../store/hook";

export const useArtworkArtistInput = () => {
  const value = useArtworkFormStore((state) => state.artist);
  const setValue = useArtworkFormStore((state) => state.setArtist);
  const validationPhase = useArtworkFormStore((state) => state.validationPhase);
  const getErrorMessages = useArtworkFormStore(
    (state) => state.getArtistErrorMessages,
  );

  const errorMessages = getErrorMessages(value, validationPhase);

  return { value, setValue, errorMessages };
};
