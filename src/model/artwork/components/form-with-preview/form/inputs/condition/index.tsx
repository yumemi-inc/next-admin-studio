"use client";

import type { FC } from "react";

import { CheckboxGroup } from "@/common/components/form/checkbox-group";

import { useArtworkConditionInput } from "./hook";

const options = [
  { label: "保証付き", value: "1" },
  { label: "状態良好", value: "2" },
  { label: "オリジナル", value: "3" },
];

export const ArtworkConditionInput: FC = () => {
  const { value, setValue, errorMessages } = useArtworkConditionInput();

  return (
    <CheckboxGroup
      label="評価項目"
      description="評価項目を選択してください"
      options={options}
      value={value}
      onChange={setValue}
      errorMessages={errorMessages}
    />
  );
};
