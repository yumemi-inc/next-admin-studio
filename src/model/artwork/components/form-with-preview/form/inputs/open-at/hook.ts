import { useArtworkFormStore } from "../../../store/hook";

export const useArtworkOpenAtInput = () => {
  const value = useArtworkFormStore((state) => state.openAt);
  const setValue = useArtworkFormStore((state) => state.setOpenAt);
  const validationPhase = useArtworkFormStore((state) => state.validationPhase);
  const getErrorMessages = useArtworkFormStore(
    (state) => state.getOpenAtErrorMessages,
  );

  const errorMessages = getErrorMessages(value, validationPhase);

  return { value, setValue, errorMessages };
};
