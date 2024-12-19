import { Center } from "@mantine/core";

export const ArtistTagsPreviewView = ({ value }: { value: string[] }) => {
  return <Center>tags: {value.join(", ")}</Center>;
};
