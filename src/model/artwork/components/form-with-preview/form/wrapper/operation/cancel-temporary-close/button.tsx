import { Button } from "@mantine/core";
import type { FC } from "react";

import { useCancelTemporaryCloseArtwork } from "./hook";

export const CancelTemporaryCloseArtworkButton: FC = () => {
  const { loading, disabled, formAction } = useCancelTemporaryCloseArtwork();

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
