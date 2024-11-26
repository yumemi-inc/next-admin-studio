"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useEditDraftArtistForm } from "./hook";

export const EditDraftArtistFormButton: FC = () => {
  const { loading, disabled, formAction } = useEditDraftArtistForm();

  return (
    <Button
      variant="outline"
      loading={loading}
      disabled={disabled}
      formAction={formAction}
      type="submit"
    >
      更新
    </Button>
  );
};
