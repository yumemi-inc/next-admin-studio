"use client";

import type { FC } from "react";

import { RadioButtonGroup } from "@/common/components/form/radio-input";

import { Stack } from "@mantine/core";
import { match } from "ts-pattern";
import { ARTWORK_SALES_STYLE_OPTIONS } from "./const";
import { useArtworkSalesStyleInput } from "./hook";
import { ArtworkAuctionStartPriceInput } from "./input/auction";
import { ArtworkFixedPriceInput } from "./input/fixed-price";

export const ArtworkSalesStyleInput: FC = () => {
  const { value, setValue, errorMessages } = useArtworkSalesStyleInput();

  return (
    <Stack>
      <RadioButtonGroup
        label="販売方式"
        description="販売方式を選択してください"
        options={ARTWORK_SALES_STYLE_OPTIONS}
        value={value}
        onChange={setValue}
        disabled={false}
        errorMessages={errorMessages}
      />
      {match(value)
        .with("auction", () => <ArtworkAuctionStartPriceInput />)
        .with("fixed_price", () => <ArtworkFixedPriceInput />)
        .otherwise(() => null)}
    </Stack>
  );
};
