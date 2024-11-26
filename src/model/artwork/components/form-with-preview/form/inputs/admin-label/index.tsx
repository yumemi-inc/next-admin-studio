"use client";

import type { FC } from "react";

import { TextInput } from "@/common/components/form/text-input";

import { useArtworkAdminLabelInput } from "./hook";

export const ArtworkAdminLabelInput: FC = () => {
  const { value, setValue, errorMessages } = useArtworkAdminLabelInput();

  return (
    <TextInput
      label="管理名称"
      description="管理画面上での識別のためのラベルです。"
      placeholder="管理名称"
      value={value}
      setValue={setValue}
      disabled={false}
      errorMessages={errorMessages}
    />
  );
};
