"use client";

import type { FC } from "react";

import { DateTimeRangeInput } from "@/common/components/form/date-time-range-input";

import { useArtworkSalesPeriodInput } from "./hook";

export const ArtworkSalesPeriodInput: FC = () => {
  const { value, setValue, errorMessages } = useArtworkSalesPeriodInput();

  return (
    <DateTimeRangeInput
      label="販売期間"
      description="販売期間を選択してください"
      required
      value={value}
      onChange={setValue}
      errorMessages={errorMessages}
    />
  );
};
