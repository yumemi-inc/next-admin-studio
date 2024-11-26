import { useArtworkFormStore } from "@/model/artwork/components/form-with-preview/store/hook";

export const useArtworkFixedPriceInput = () => {
  const fixedPrice = useArtworkFormStore((state) => state.fixedPrice);
  const setFixedPrice = useArtworkFormStore((state) => state.setFixedPrice);

  const validationPhase = useArtworkFormStore((state) => state.validationPhase);
  const getFixedPriceErrorMessages = useArtworkFormStore(
    (state) => state.getFixedPriceErrorMessages,
  );

  const errorMessages = getFixedPriceErrorMessages(fixedPrice, validationPhase);

  const setValueAsNumber = (value: number | string) => {
    setFixedPrice(Number(value));
  };

  return {
    value: fixedPrice,
    setValue: setValueAsNumber,
    errorMessages,
  };
};
