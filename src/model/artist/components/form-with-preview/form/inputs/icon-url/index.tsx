"use client";

import type { FC } from "react";

import { TextInput } from "@/common/components/form/text-input";

import { useArtistIconUrlInput } from "./hook";

export const ArtistIconUrlInput: FC = () => {
  const { value, setValue, errorMessages } = useArtistIconUrlInput();

  return (
    <TextInput
      label="アイコンURL"
      description="アイコン画像のURLを入力してください。"
      placeholder="https://..."
      required
      value={value}
      setValue={setValue}
      errorMessages={errorMessages}
    />
  );
};
