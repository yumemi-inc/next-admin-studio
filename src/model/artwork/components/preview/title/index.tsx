import { Text } from "@mantine/core";

export const ArtworkTitlePreviewView = ({ value }: { value: string }) => {
  return (
    <Text size="lg" fw="bold">
      {value}
    </Text>
  );
};
