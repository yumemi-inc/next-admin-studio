"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useEditConfirmedArtistForm } from "./hook";

export const EditConfirmedArtistFormButton: FC = () => {
  const { loading, disabled, onClick } = useEditConfirmedArtistForm();

  return (
    <Button
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      type="submit"
    >
      更新
    </Button>
  );
};
