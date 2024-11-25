import { Flex, Text } from "@mantine/core";

import { AdministratorAvaterContainer } from "@/model/administrator/components/avater/container";

export const Header = () => {
  return (
    <Flex justify="space-between" align="center" py="xs" px="md">
      <Text fw="bold">Next Admin Studio</Text>
      <AdministratorAvaterContainer />
    </Flex>
  );
};
