import { match } from "ts-pattern";

import type { Artwork } from "@/model/artwork/type";

import { ARTWORK_AUCTION_STARTING_PRICE_DEFAULT_VALUE } from "./input/auction/const";
import { ARTWORK_FIXED_PRICE_DEFAULT_VALUE } from "./input/fixed-price/const";
import type { ArtworkSalesStyleInputSlice } from "./slice";

export const artistSalesStyleConverter = {
  toClient: (
    serverValue: Artwork["salesStyle"],
  ): ArtworkSalesStyleInputSlice => {
    return match(serverValue)
      .with({ type: "AUCTION" }, (v) => ({
        salesStyle: v.type,
        auctionStartingPrice: v.startingPrice,
        fixedPrice: ARTWORK_FIXED_PRICE_DEFAULT_VALUE,
      }))
      .with({ type: "FIXED_PRICE" }, (v) => ({
        salesStyle: v.type,
        auctionStartingPrice: ARTWORK_AUCTION_STARTING_PRICE_DEFAULT_VALUE,
        fixedPrice: v.fixedPrice,
      }))
      .exhaustive();
  },
  toServer: (formValue: ArtworkSalesStyleInputSlice) => {
    return match(formValue)
      .with({ salesStyle: "AUCTION" }, () => ({
        type: "AUCTION",
        startingPrice: formValue.auctionStartingPrice,
      }))
      .with({ salesStyle: "FIXED_PRICE" }, () => ({
        type: "FIXED_PRICE",
        fixedPrice: formValue.fixedPrice,
      }))
      .exhaustive();
  },
};
