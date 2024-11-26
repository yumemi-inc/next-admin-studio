import { Text } from "@mantine/core";

export const ArtistTagsPreviewView = ({ value }: { value: string[] }) => {
  return <Text>{value.join(",")}</Text>;
};
