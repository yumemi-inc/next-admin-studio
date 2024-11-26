import { Button } from "@mantine/core";
import type { FC } from "react";

import { useCancelTemporaryCloseArtist } from "./hook";

export const CancelTemporaryCloseArtistButton: FC = () => {
  const { loading, disabled, formAction } = useCancelTemporaryCloseArtist();

  return (
    <Button
      variant="outline"
      color="teal"
      loading={loading}
      disabled={disabled}
      onClick={formAction}
      type="submit"
    >
      再公開
    </Button>
  );
};
