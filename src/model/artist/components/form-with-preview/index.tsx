import { ScrollArea, SimpleGrid, Space, Stack, Text } from "@mantine/core";

import { ArtistFormWithPreviewBreadcrumbs } from "./breadcrumbs";
import { ArtistForm } from "./form";
import { ArtistFormPreview } from "./preview";

export const ArtistFormWithPreview = () => {
  return (
    <SimpleGrid cols={2}>
      <Stack p="xl">
        <ArtistFormWithPreviewBreadcrumbs />
        <Space h={32} />
        <ScrollArea className="h-[calc(100vh-210px)]" type="never">
          <Stack justify="center" align="center" gap="lg">
            <ArtistFormPreview />
            <Text c="gray" size="sm">
              プレビューは実際の見た目とは異なる可能性があります
            </Text>
          </Stack>
        </ScrollArea>
      </Stack>

      <ArtistForm />
    </SimpleGrid>
  );
};
