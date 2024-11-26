import { Text } from "@mantine/core";

export const ArtworkImagePreviewView = ({ value }: { value: File | null }) => {
  return <Text>{value?.name}</Text>;
};
