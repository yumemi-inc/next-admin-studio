import { useArtworkFormStore } from "../../../store/hook";
import type { ArtworkSalesStyle } from "./type";

export const useArtworkSalesStyleInput = () => {
  // 販売方式
  const salesStyle = useArtworkFormStore((state) => state.salesStyle);
  const setSalesStyle = useArtworkFormStore((state) => state.setSalesStyle);

  const validationPhase = useArtworkFormStore((state) => state.validationPhase);
  const getSalesStyleErrorMessages = useArtworkFormStore(
    (state) => state.getSalesStyleErrorMessages,
  );

  const errorMessages = getSalesStyleErrorMessages(salesStyle, validationPhase);

  const setValueAsArtworkSalesStyle = (v: string) => {
    setSalesStyle(v as ArtworkSalesStyle);
  };

  return {
    value: salesStyle,
    setValue: setValueAsArtworkSalesStyle,
    errorMessages,
  };
};
