"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useCreateConfirmedArtworkForm } from "./hook";

export const CreateConfirmedArtworkFormButton: FC = () => {
  const { loading, disabled, formAction } = useCreateConfirmedArtworkForm();

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
