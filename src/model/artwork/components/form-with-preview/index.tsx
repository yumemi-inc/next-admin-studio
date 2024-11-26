import { ScrollArea, SimpleGrid, Space, Stack, Text } from "@mantine/core";

import { ArtworkFormWithPreviewBreadcrumbs } from "./breadcrumbs";
import { ArtworkForm } from "./form";
import { ArtworkFormPreview } from "./preview";

export const ArtworkFormWithPreview = () => {
  return (
    <SimpleGrid cols={2}>
      <Stack p="xl">
        <ArtworkFormWithPreviewBreadcrumbs />
        <Space h={32} />
        <ScrollArea className="h-[calc(100vh-210px)]" type="never">
          <Stack justify="center" align="center" gap="lg">
            <ArtworkFormPreview />
            <Text c="gray" size="sm">
              プレビューは実際の見た目とは異なる可能性があります
            </Text>
          </Stack>
        </ScrollArea>
      </Stack>

      <ArtworkForm />
    </SimpleGrid>
  );
};
