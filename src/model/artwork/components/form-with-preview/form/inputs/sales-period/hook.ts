import { useArtworkFormStore } from "../../../store/hook";

export const useArtworkSalesPeriodInput = () => {
  const value = useArtworkFormStore((state) => state.salesPeriod);
  const setValue = useArtworkFormStore((state) => state.setSalesPeriod);
  const validationPhase = useArtworkFormStore((state) => state.validationPhase);
  const getErrorMessages = useArtworkFormStore(
    (state) => state.getSalesPeriodErrorMessages,
  );

  const errorMessages = getErrorMessages(value, validationPhase);

  return { value, setValue, errorMessages };
};
