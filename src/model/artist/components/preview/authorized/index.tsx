import { Text } from "@mantine/core";

export const ArtistAuthorizedPreviewView = ({ value }: { value: boolean }) => {
  return <Text>{value ? "YES" : "NO"}</Text>;
};
