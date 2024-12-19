"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useTemporarilyCloseArtworkForm } from "./hook";

export const TemporarilyCloseArtworkFormButton: FC = () => {
  const { loading, disabled, onClick } = useTemporarilyCloseArtworkForm();

  return (
    <Button
      variant="outline"
      color="red"
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      type="submit"
    >
      公開停止
    </Button>
  );
};
