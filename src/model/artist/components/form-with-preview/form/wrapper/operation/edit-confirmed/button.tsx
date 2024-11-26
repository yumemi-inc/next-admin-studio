"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useEditConfirmedArtistForm } from "./hook";

export const EditConfirmedArtistFormButton: FC = () => {
  const { loading, disabled, formAction } = useEditConfirmedArtistForm();

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
