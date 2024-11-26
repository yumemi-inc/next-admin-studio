"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useCreateDraftArtworkForm } from "./hook";

export const CreateDraftArtworkFormButton: FC = () => {
  const { loading, disabled, formAction } = useCreateDraftArtworkForm();

  return (
    <Button
      variant="outline"
      loading={loading}
      disabled={disabled}
      formAction={formAction}
      type="submit"
    >
      下書き保存
    </Button>
  );
};
