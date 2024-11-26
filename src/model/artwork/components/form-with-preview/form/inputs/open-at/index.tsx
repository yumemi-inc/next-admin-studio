"use client";

import type { FC } from "react";

import { DateTimeInput } from "@/common/components/form/date-time-input";

import { useArtworkOpenAtInput } from "./hook";

export const ArtworkOpenAtInput: FC = () => {
  const { value, setValue, errorMessages } = useArtworkOpenAtInput();

  return (
    <DateTimeInput
      label="公開開始時刻"
      description="公開開始時刻を選択してください"
      required
      value={value}
      onChange={setValue}
      errorMessages={errorMessages}
    />
  );
};
