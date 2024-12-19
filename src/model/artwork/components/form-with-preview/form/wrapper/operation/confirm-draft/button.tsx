"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useConfirmDraftArtworkForm } from "./hook";

export const ConfirmDraftArtworkFormButton: FC = () => {
  const { loading, disabled, onClick } = useConfirmDraftArtworkForm();

  return (
    <Button
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      type="submit"
    >
      確定保存
    </Button>
  );
};
