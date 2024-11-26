"use client";

import type { FC } from "react";

import { TextInput } from "@/common/components/form/text-input";

import { useArtworkTitleInput } from "./hook";

export const ArtworkTitleInput: FC = () => {
  const { value, setValue, errorMessages } = useArtworkTitleInput();

  return (
    <TextInput
      label="タイトル"
      description="タイトルを入力してください"
      placeholder="タイトル"
      required
      value={value}
      setValue={setValue}
      errorMessages={errorMessages}
    />
  );
};
