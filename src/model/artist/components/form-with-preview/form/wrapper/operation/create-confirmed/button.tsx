"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useCreateConfirmedArtistForm } from "./hook";

export const CreateConfirmedArtistFormButton: FC = () => {
  const { loading, disabled, formAction } = useCreateConfirmedArtistForm();

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
