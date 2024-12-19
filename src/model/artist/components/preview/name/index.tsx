import { Text } from "@mantine/core";

export const ArtistNamePreviewView = ({ value }: { value: string }) => {
  return (
    <Text size="lg" fw="bold">
      {value}
    </Text>
  );
};
