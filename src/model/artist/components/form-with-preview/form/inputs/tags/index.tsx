"use client";

import type { FC } from "react";

import { TagsInput } from "@/common/components/form/tags-input";

import { useArtistTagsInput } from "./hook";

export const ArtistTagsInput: FC = () => {
  const { value, setValue, errorMessages } = useArtistTagsInput();

  return (
    <TagsInput
      label="タグ"
      description="タグを入力してください。"
      placeholder="タグ"
      required
      value={value}
      onChange={setValue}
      errorMessages={errorMessages}
    />
  );
};
