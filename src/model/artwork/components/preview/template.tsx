import { Paper, ScrollArea } from "@mantine/core";
import type { FC } from "react";

import { IPHONE_SE_SIZE } from "@/common/const/size";

export const ArtworkPreviewTemplate: FC = () => {
  return (
    <Paper
      shadow="md"
      withBorder
      {...IPHONE_SE_SIZE}
      className="animate-preview-fade-in rounded-md"
    >
      <ScrollArea {...IPHONE_SE_SIZE} type="never">
        {/* components here */}
      </ScrollArea>
    </Paper>
  );
};
