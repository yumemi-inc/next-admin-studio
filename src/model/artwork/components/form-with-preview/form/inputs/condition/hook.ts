import { useArtworkFormStore } from "../../../store/hook";

export const useArtworkConditionInput = () => {
  const value = useArtworkFormStore((state) => state.condition);
  const setValue = useArtworkFormStore((state) => state.setCondition);
  const validationPhase = useArtworkFormStore((state) => state.validationPhase);
  const getErrorMessages = useArtworkFormStore(
    (state) => state.getConditionErrorMessages,
  );

  const errorMessages = getErrorMessages(value, validationPhase);

  return { value, setValue, errorMessages };
};
