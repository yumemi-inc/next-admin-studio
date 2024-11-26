"use client";

import type { FC } from "react";

import { Select } from "@/common/components/form/select";

import { useArtworkArtistInput } from "./hook";

export const ArtworkArtistInput: FC = () => {
  const { value, setValue, errorMessages } = useArtworkArtistInput();

  return (
    <Select
      label="アーティスト"
      description="アーティストを選択してください"
      placeholder="クリックして選択"
      data={[]}
      required
      value={value}
      onChange={setValue}
      errorMessages={errorMessages}
    />
  );
};
