import { Box, Flex, Stack } from "@mantine/core";
import type { FC, PropsWithChildren, ReactNode } from "react";

type Props = {
  header: ReactNode;
  footer: ReactNode;
};

export const ContentFormTemplate: FC<PropsWithChildren<Props>> = ({
  children,
  header,
  footer,
}) => {
  return (
    <Flex
      component="form"
      direction="column"
      className="h-[calc(100vh-60px)] border-gray-4 border-l"
      // 「下書き保存時はrequired無視」など、独自のバリデーションを使用するため
      noValidate
    >
      <Box className="grow overflow-y-scroll scroll-smooth">
        {header}
        <Stack gap="lg" px="lg" py="lg">
          {children}
        </Stack>
      </Box>
      {footer}
    </Flex>
  );
};
