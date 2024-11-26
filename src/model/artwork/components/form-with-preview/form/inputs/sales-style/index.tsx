"use client";

import type { FC } from "react";

import { RadioButtonGroup } from "@/common/components/form/radio-input";

import { useArtworkSalesStyleInput } from "./hook";

const options = [
  { label: "オークション", value: "1" },
  { label: "定価販売", value: "2" },
];

export const ArtworkSalesStyleInput: FC = () => {
  const { value, setValue, errorMessages } = useArtworkSalesStyleInput();

  return (
    <RadioButtonGroup
      label="販売方式"
      description="販売方式を選択してください"
      options={options}
      value={value}
      onChange={setValue}
      disabled={false}
      errorMessages={errorMessages}
    />
  );
};
