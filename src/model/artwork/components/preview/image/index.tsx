import { Image } from "@mantine/core";

export const ArtworkImagePreviewView = ({ value }: { value: string }) => {
  return <Image src={value} alt="image" w="100%" className="shadow-lg" />;
};
