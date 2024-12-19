import { Flex, Image } from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";

export const ArtistIconUrlPreviewView = ({ value }: { value: string }) => {
  return (
    <Flex align="center" justify="center" w={300} h={400}>
      {value ? (
        <Image
          src={value}
          alt="icon"
          bg="white"
          h="100%"
          radius="md"
          className="shadow-xl"
        />
      ) : (
        <Flex justify="center" align="center" bg="gray" w="100%" h="100%">
          <IconPhoto size={20} color="white" />
        </Flex>
      )}
    </Flex>
  );
};
