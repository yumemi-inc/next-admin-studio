"use client";

import { Box, Button, Collapse, Flex, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import type { FC, PropsWithChildren } from "react";

export const CollapsedSearchBox: FC<PropsWithChildren> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box>
      <Flex justify="start" py={8}>
        <Button
          onClick={toggle}
          leftSection={
            opened ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />
          }
          variant="transparent"
          p={0}
          c="gray"
        >
          <Text size="sm">さらに詳しく</Text>
        </Button>
      </Flex>
      <Collapse in={opened}>
        <Stack gap="lg">{children}</Stack>
      </Collapse>
    </Box>
  );
};
