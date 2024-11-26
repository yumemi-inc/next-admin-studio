"use client";

import type { FC } from "react";

import { NumberInput } from "@/common/components/form/number-input";

import { useArtworkFixedPriceInput } from "./hook";

export const ArtworkFixedPriceInput: FC = () => {
  const { value, setValue, errorMessages } = useArtworkFixedPriceInput();

  return (
    <NumberInput
      label="価格"
      description="価格を入力してください"
      value={value}
      onChange={setValue}
      errorMessages={errorMessages}
    />
  );
};
