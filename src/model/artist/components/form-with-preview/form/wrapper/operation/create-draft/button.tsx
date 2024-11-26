"use client";

import { Button } from "@mantine/core";
import type { FC } from "react";

import { useCreateDraftArtistForm } from "./hook";

export const CreateDraftArtistFormButton: FC = () => {
  const { loading, disabled, formAction } = useCreateDraftArtistForm();

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
