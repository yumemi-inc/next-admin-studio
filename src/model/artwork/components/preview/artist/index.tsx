import type { Artist } from "@/model/artist/type";
import { Avatar, Flex, Text } from "@mantine/core";

export const ArtworkArtistPreviewView = ({
  value,
}: { value: Artist | null }) => {
  if (!value) {
    return (
      <Flex align="center" gap="xs">
        <Avatar />
        <Text>Unknown</Text>
      </Flex>
    );
  }

  return (
    <Flex align="center" gap="xs">
      <Avatar src={value.iconUrl} />
      <Text>{value.name}</Text>
    </Flex>
  );
};
