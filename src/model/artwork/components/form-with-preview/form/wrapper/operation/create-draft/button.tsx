"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useCreateDraftArtworkForm } from "./hook";

export const CreateDraftArtworkFormButton: FC = () => {
  const { loading, disabled, onClick } = useCreateDraftArtworkForm();

  return (
    <Button
      variant="outline"
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      type="submit"
    >
      下書き保存
    </Button>
  );
};
