import { useArtistFormStore } from "../../../store/hook";

export const useArtistIconUrlInput = () => {
  const value = useArtistFormStore((state) => state.iconUrl);
  const setValue = useArtistFormStore((state) => state.setIconUrl);
  const validationPhase = useArtistFormStore((state) => state.validationPhase);
  const getErrorMessages = useArtistFormStore(
    (state) => state.getIconUrlErrorMessages,
  );

  const errorMessages = getErrorMessages(value, validationPhase);

  return { value, setValue, errorMessages };
};
