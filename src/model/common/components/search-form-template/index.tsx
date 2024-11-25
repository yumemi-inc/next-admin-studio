import { Box, Button, Flex, Text } from "@mantine/core";
import { IconFilter } from "@tabler/icons-react";
import type { FC, FormEventHandler, ReactNode } from "react";

import { CollapsedSearchBox } from "./collapsed-search-box";

export const SearchFormTemplate: FC<{
  basicFilter: ReactNode;
  advancedFilter?: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}> = ({ basicFilter, advancedFilter, onSubmit }) => {
  return (
    <Box className="rounded-sm border border-gray-4" pt={12} px={24}>
      <form onSubmit={onSubmit}>
        <Text c="gray" pb={4} size="sm">
          絞り込み条件
        </Text>

        {basicFilter}

        {advancedFilter && (
          <CollapsedSearchBox>{advancedFilter}</CollapsedSearchBox>
        )}

        <Flex justify="end" gap="xs" pb="sm" mt="md">
          <Button type="submit" leftSection={<IconFilter size={14} />}>
            絞り込み
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
