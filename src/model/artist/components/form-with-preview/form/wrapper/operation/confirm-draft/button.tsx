"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useConfirmDraftArtistForm } from "./hook";

export const ConfirmDraftArtistFormButton: FC = () => {
  const { loading, disabled, formAction } = useConfirmDraftArtistForm();

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
