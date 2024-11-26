"use client";

import type { FC } from "react";

import { NumberInput } from "@/common/components/form/number-input";

import { useArtworkAuctionStartPriceInput } from "./hook";

export const ArtworkAuctionStartPriceInput: FC = () => {
  const { value, setValue, errorMessages } = useArtworkAuctionStartPriceInput();

  return (
    <NumberInput
      label="開始価格"
      description="開始価格を入力してください"
      value={value}
      onChange={setValue}
      disabled={false}
      errorMessages={errorMessages}
    />
  );
};
