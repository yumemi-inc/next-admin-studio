"use client";

import type { FC } from "react";

import { Switch } from "@/common/components/form/switch";

import { useArtistAuthorizedInput } from "./hook";

export const ArtistAuthorizedInput: FC = () => {
  const { value, setValue } = useArtistAuthorizedInput();

  return (
    <Switch
      label="公認アーティスト"
      description="公認されたアーティストは、作品を販売できます。"
      required
      onLabel="する"
      offLabel="しない"
      checked={value}
      onChange={setValue}
    />
  );
};
