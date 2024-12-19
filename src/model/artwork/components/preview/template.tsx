import { Box, Divider, Paper, ScrollArea, Space, Stack } from "@mantine/core";
import type { FC, ReactNode } from "react";

import { IPHONE_SE_SIZE } from "@/common/const/size";

type Props = {
  title: ReactNode;
  description: ReactNode;
  artist: ReactNode;
  image: ReactNode;
  salesPeriod: ReactNode;
  condition: ReactNode;
  salesStyle: ReactNode;
};

export const ArtworkPreviewTemplate: FC<Props> = (props) => {
  return (
    <Paper
      shadow="md"
      withBorder
      {...IPHONE_SE_SIZE}
      className="animate-preview-fade-in rounded-md"
      bg="gray.0"
    >
      <ScrollArea {...IPHONE_SE_SIZE} type="never">
        <Stack p="xl">
          <Box mx="auto">{props.image}</Box>

          <Space />
          <Stack gap={2}>
            {props.title}
            {props.condition}
          </Stack>

          {props.description}
          <Space />
          {props.artist}

          <Space />

          <Divider />

          <Space />
          {props.salesStyle}
          {props.salesPeriod}
        </Stack>
      </ScrollArea>
    </Paper>
  );
};
