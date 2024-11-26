import { useArtistFormStore } from "../../../store/hook";

export const useArtistTagsInput = () => {
  const value = useArtistFormStore((state) => state.tags);
  const setValue = useArtistFormStore((state) => state.setTags);
  const validationPhase = useArtistFormStore((state) => state.validationPhase);
  const getErrorMessages = useArtistFormStore(
    (state) => state.getTagsErrorMessages,
  );

  const errorMessages = getErrorMessages(value, validationPhase);

  return { value, setValue, errorMessages };
};
