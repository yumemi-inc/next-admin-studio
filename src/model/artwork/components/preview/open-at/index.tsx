import { Text } from "@mantine/core";

export const ArtworkOpenAtPreviewView = ({ value }: { value: Date | null }) => {
  return <Text>{value?.toISOString()}</Text>;
};
