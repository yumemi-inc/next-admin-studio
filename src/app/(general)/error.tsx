"use client";

import { Stack, Text, Title } from "@mantine/core";

export default function ErrorPage() {
  return (
    <main>
      <Stack p="xl">
        <Title>Sorry!😢</Title>
        <Text>予期せぬエラーが発生しました。時間を置いてお試しください。</Text>
      </Stack>
    </main>
  );
}
