"use client";

import type { FC } from "react";

import { FileInput } from "@/common/components/form/file-input";

import { useArtworkImageInput } from "./hook";

export const ArtworkImageInput: FC = () => {
  const { file, onUpload, errorMessages } = useArtworkImageInput();

  return (
    <FileInput
      label="作品の画像"
      description="作品の画像をアップロードしてください"
      placeholder="クリックして画像をアップロード"
      required
      value={file}
      onChange={onUpload}
      errorMessages={errorMessages}
    />
  );
};
