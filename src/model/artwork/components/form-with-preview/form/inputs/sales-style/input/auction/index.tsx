"use client";

import type { FC } from "react";

import { NumberInput } from "@/common/components/form/number-input";

import { useArtworkAuctionStartingPriceInput } from "./hook";

export const ArtworkAuctionStartingPriceInput: FC = () => {
  const { value, setValue, errorMessages } =
    useArtworkAuctionStartingPriceInput();

  return (
    <NumberInput
      label="開始価格"
      description="開始価格を入力してください"
      value={value}
      onChange={setValue}
      errorMessages={errorMessages}
    />
  );
};
