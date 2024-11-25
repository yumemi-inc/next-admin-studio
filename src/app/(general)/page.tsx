import { Stack, Text, Title } from "@mantine/core";

export default function Home() {
  return (
    <main>
      <Stack p="xl">
        <Title className="text-primary-5">ようこそ Next Admin Studio へ</Title>

        <Text c="gray" size="lg">
          Next.js と Mantine UI
          を使用した管理画面のテンプレートプロジェクトです。
        </Text>
        <Text c="gray" size="lg">
          scaffdog を用いて高速で開発を進めることができます。
        </Text>
      </Stack>
    </main>
  );
}
