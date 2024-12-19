"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useConfirmDraftArtistForm } from "./hook";

export const ConfirmDraftArtistFormButton: FC = () => {
  const { loading, disabled, onClick } = useConfirmDraftArtistForm();

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
