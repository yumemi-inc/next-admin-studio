"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useCreateConfirmedArtistForm } from "./hook";

export const CreateConfirmedArtistFormButton: FC = () => {
  const { loading, disabled, onClick } = useCreateConfirmedArtistForm();

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
