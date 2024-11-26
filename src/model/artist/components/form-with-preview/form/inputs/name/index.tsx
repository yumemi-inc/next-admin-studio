"use client";

import type { FC } from "react";

import { TextInput } from "@/common/components/form/text-input";

import { useArtistNameInput } from "./hook";

export const ArtistNameInput: FC = () => {
  const { value, setValue, errorMessages } = useArtistNameInput();

  return (
    <TextInput
      label="名前"
      description="アーティストの名前です。"
      placeholder="名前"
      required
      value={value}
      setValue={setValue}
      errorMessages={errorMessages}
    />
  );
};
