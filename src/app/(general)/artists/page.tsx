import { Stack, Title } from "@mantine/core";

import { ArtistList } from "@/model/artist/components/list";

export default function ArtistListPage() {
  return (
    <main>
      <Stack p="xl" gap="lg">
        <Title>アーティスト一覧</Title>
        <ArtistList />
      </Stack>
    </main>
  );
}
