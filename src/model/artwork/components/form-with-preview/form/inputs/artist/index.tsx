"use client";

import type { FC } from "react";

import { Select } from "@/common/components/form/select";

import { ARTWORK_ARTIST_OPTIONS } from "./const";
import { useArtworkArtistInput } from "./hook";

export const ArtworkArtistInput: FC = () => {
  const { value, setValue, errorMessages } = useArtworkArtistInput();

  return (
    <Select
      label="アーティスト"
      description="アーティストを選択してください"
      placeholder="クリックして選択"
      data={ARTWORK_ARTIST_OPTIONS}
      required
      value={value}
      onChange={setValue}
      errorMessages={errorMessages}
    />
  );
};
