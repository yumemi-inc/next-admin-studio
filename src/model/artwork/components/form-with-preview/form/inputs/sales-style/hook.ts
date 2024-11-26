import { useArtworkFormStore } from "../../../store/hook";
import type { ArtworkSalesStyle } from "./type";

export const useArtworkSalesStyleInput = () => {
  const value = useArtworkFormStore((state) => state.salesStyle);
  const _setValue = useArtworkFormStore((state) => state.setSalesStyle);
  const validationPhase = useArtworkFormStore((state) => state.validationPhase);
  const getSalesStyleErrorMessages = useArtworkFormStore(
    (state) => state.getSalesStyleErrorMessages,
  );

  const errorMessages = getSalesStyleErrorMessages(value, validationPhase);

  const setValue = (v: string) => {
    _setValue(v as ArtworkSalesStyle);
  };

  return {
    value,
    setValue,
    errorMessages,
  };
};
