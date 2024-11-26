import { Box, type BoxComponentProps } from "@mantine/core";
import type { FC, PropsWithChildren } from "react";

export const Indent: FC<
  /**
   *  biome-ignore lint/suspicious/noExplicitAny: 本家でそうなってるしいいかなって
   *  @see https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/core/Box/Box.tsx#L65C21-L65C77
   */
  PropsWithChildren<BoxComponentProps & { component?: any }>
> = ({ children, ...props }) => (
  <Box
    pl="md"
    style={{
      borderLeft: "1px solid var(--mantine-color-gray-3)",
    }}
    {...props}
  >
    {children}
  </Box>
);
