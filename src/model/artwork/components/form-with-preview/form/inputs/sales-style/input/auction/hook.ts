import { useArtworkFormStore } from "@/model/artwork/components/form-with-preview/store/hook";

export const useArtworkAuctionStartingPriceInput = () => {
  const auctionStartingPrice = useArtworkFormStore(
    (state) => state.auctionStartingPrice,
  );
  const setAuctionStartingPrice = useArtworkFormStore(
    (state) => state.setAuctionStartingPrice,
  );

  const validationPhase = useArtworkFormStore((state) => state.validationPhase);
  const getAuctionStartingPriceErrorMessages = useArtworkFormStore(
    (state) => state.getAuctionStartingPriceErrorMessages,
  );

  const errorMessages = getAuctionStartingPriceErrorMessages(
    auctionStartingPrice,
    validationPhase,
  );

  const setValueAsNumber = (value: number | string) => {
    setAuctionStartingPrice(Number(value));
  };

  return {
    value: auctionStartingPrice,
    setValue: setValueAsNumber,
    errorMessages,
  };
};
