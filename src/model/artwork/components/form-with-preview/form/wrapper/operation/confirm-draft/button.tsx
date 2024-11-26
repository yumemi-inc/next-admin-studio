"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useConfirmDraftArtworkForm } from "./hook";

export const ConfirmDraftArtworkFormButton: FC = () => {
  const { loading, disabled, formAction } = useConfirmDraftArtworkForm();

  return (
    <Button
      loading={loading}
      disabled={disabled}
      formAction={formAction}
      type="submit"
    >
      確定保存
    </Button>
  );
};
