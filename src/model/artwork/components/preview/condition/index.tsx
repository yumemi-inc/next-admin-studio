import { Text } from "@mantine/core";

export const ArtworkConditionPreviewView = ({ value }: { value: string[] }) => {
  return <Text>{value.join(",")}</Text>;
};
