"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useTemporarilyCloseArtworkForm } from "./hook";

export const TemporarilyCloseArtworkFormButton: FC = () => {
  const { loading, disabled, formAction } = useTemporarilyCloseArtworkForm();

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
