import { useArtworkFormStore } from "@/model/artwork/components/form-with-preview/store/hook";

export const useArtworkAuctionStartPriceInput = () => {
  // オークションの場合の開始価格
  const auctionStartPrice = useArtworkFormStore(
    (state) => state.auctionStartPrice,
  );
  const setAuctionStartPrice = useArtworkFormStore(
    (state) => state.setAuctionStartPrice,
  );

  const validationPhase = useArtworkFormStore((state) => state.validationPhase);
  const getAuctionStartPriceErrorMessages = useArtworkFormStore(
    (state) => state.getAuctionStartPriceErrorMessages,
  );

  const errorMessages = getAuctionStartPriceErrorMessages(
    auctionStartPrice,
    validationPhase,
  );

  const setValueAsNumber = (value: number | string) => {
    setAuctionStartPrice(Number(value));
  };

  return {
    value: auctionStartPrice,
    setValue: setValueAsNumber,
    errorMessages,
  };
};
