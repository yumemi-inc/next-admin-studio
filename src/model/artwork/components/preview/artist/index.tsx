import { Text } from "@mantine/core";

export const ArtworkArtistPreviewView = ({
  value,
}: { value: string | null }) => {
  return <Text>{value ?? ""}</Text>;
};
