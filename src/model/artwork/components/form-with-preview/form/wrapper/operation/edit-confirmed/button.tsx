"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useEditConfirmedArtworkForm } from "./hook";

export const EditConfirmedArtworkFormButton: FC = () => {
  const { loading, disabled, formAction } = useEditConfirmedArtworkForm();

  return (
    <Button
      loading={loading}
      disabled={disabled}
      formAction={formAction}
      type="submit"
    >
      更新
    </Button>
  );
};
