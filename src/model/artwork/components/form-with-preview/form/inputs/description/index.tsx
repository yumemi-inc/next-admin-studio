"use client";

import type { FC } from "react";

import { TextArea } from "@/common/components/form/text-area";

import { useArtworkDescriptionInput } from "./hook";

export const ArtworkDescriptionInput: FC = () => {
  const { value, setValue, errorMessages } = useArtworkDescriptionInput();

  return (
    <TextArea
      label="説明"
      description="説明を入力してください"
      placeholder="説明を入力"
      required
      value={value}
      setValue={setValue}
      errorMessages={errorMessages}
    />
  );
};
