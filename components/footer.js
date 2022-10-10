import React from "react";
import { Box, Center, Divider, Heading, Text, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="primary6">
      <Center>
        <Box w="90%" py={10}>
          <Divider bg="white" />
          <Heading as="h1" my={5} textAlign="center">
            Dolor Domum
          </Heading>
          <Text variant="footer">4400, Steyr, Austria</Text>
          <Text variant="footer">Damberggasse 10</Text>
          <Text variant="footer">+436766249716</Text>
        </Box>
      </Center>
      <Stack w="100%" bg="blackAlpha.700" py={3} spacing={0}>
        <Text variant="footer">Copyright</Text>
        <Text variant="footer">Site by idevtier</Text>
      </Stack>
    </Box>
  );
};
export default Footer;
