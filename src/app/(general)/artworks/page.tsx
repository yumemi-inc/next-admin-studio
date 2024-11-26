import { Stack, Title } from "@mantine/core";

import { ArtworkList } from "@/model/artwork/components/list";

export default function ArtworkListPage() {
  return (
    <main>
      <Stack p="xl" gap="lg">
        <Title>作品一覧</Title>
        <ArtworkList />
      </Stack>
    </main>
  );
}
