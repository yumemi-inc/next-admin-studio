"use client";

import type { FC } from "react";

import { CheckboxGroup } from "@/common/components/form/checkbox-group";

import { ARTWORK_CONDITION_OPTIONS } from "./const";
import { useArtworkConditionInput } from "./hook";

export const ArtworkConditionInput: FC = () => {
  const { value, setValue, errorMessages } = useArtworkConditionInput();

  return (
    <CheckboxGroup
      label="評価項目"
      description="評価項目を選択してください"
      options={ARTWORK_CONDITION_OPTIONS}
      value={value}
      onChange={setValue}
      errorMessages={errorMessages}
    />
  );
};
