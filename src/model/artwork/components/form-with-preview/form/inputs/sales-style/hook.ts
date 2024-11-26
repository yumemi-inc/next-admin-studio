import { useArtworkFormStore } from "../../../store/hook";

export const useArtworkSalesStyleInput = () => {
  const value = useArtworkFormStore((state) => state.salesStyle);
  const setValue = useArtworkFormStore((state) => state.setSalesStyle);
  const validationPhase = useArtworkFormStore((state) => state.validationPhase);
  const getErrorMessages = useArtworkFormStore(
    (state) => state.getSalesStyleErrorMessages,
  );

  const errorMessages = getErrorMessages(value, validationPhase);

  return { value, setValue, errorMessages };
};
