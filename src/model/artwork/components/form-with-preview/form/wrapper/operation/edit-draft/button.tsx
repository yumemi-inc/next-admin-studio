"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useEditDraftArtworkForm } from "./hook";

export const EditDraftArtworkFormButton: FC = () => {
  const { loading, disabled, onClick } = useEditDraftArtworkForm();

  return (
    <Button
      variant="outline"
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      type="submit"
    >
      更新
    </Button>
  );
};
