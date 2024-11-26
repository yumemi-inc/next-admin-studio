import { Center, SimpleGrid, Skeleton, Stack } from "@mantine/core";

import { generateSequentialArray } from "@/common/lib/array";

import { DEFAULT_PAGE_SIZE } from "@/model/common/components/pagination/const";

export const ArtistPreviewListLoading = () => (
  <SimpleGrid
    cols={2}
    spacing={0}
    verticalSpacing={0}
    className="border-gray-4 border-t-0 border-r-0 border-b-0 border-solid"
  >
    {generateSequentialArray(DEFAULT_PAGE_SIZE).map((v) => (
      <Center
        key={v}
        py="md"
        className="border-gray-4 border-t-0 border-l-0 border-solid"
      >
        <Stack gap="sm">
          <Skeleton w={120} h={24.8} />
          <Skeleton w={375} h={667} />
        </Stack>
      </Center>
    ))}
  </SimpleGrid>
);
