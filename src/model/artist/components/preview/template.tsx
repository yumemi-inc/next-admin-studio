import { Flex, Paper, ScrollArea, Space, Stack } from "@mantine/core";
import type { FC, ReactNode } from "react";

import { IPHONE_SE_SIZE } from "@/common/const/size";

type Props = {
  iconUrl: ReactNode;
  name: ReactNode;
  authorized: ReactNode;
  tags: ReactNode;
};

export const ArtistPreviewTemplate: FC<Props> = (props) => {
  return (
    <Paper
      shadow="md"
      withBorder
      {...IPHONE_SE_SIZE}
      className="animate-preview-fade-in rounded-md"
    >
      <ScrollArea {...IPHONE_SE_SIZE} type="never">
        <Stack align="center">
          <Space h={40} />
          {props.iconUrl}
          <Flex align="center" gap={4}>
            {props.name}
            {props.authorized}
          </Flex>
          {props.tags}
        </Stack>
      </ScrollArea>
    </Paper>
  );
};
