"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useTemporarilyCloseArtistForm } from "./hook";

export const TemporarilyCloseArtistFormButton: FC = () => {
  const { loading, disabled, formAction } = useTemporarilyCloseArtistForm();

  return (
    <Button
      variant="outline"
      color="red"
      loading={loading}
      disabled={disabled}
      onClick={formAction}
      type="submit"
    >
      公開停止
    </Button>
  );
};
