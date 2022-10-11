import React from "react";
import { Box, Center, Divider, Heading, Text, Stack } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import Address from "./icons/address.js";

const FooterInfo = ({ icon, children }) => {
  return (
    <Center>
      <Text variant="footer" pl={3} position="relative">
        {icon}
        {children}
      </Text>
    </Center>
  );
};

const Footer = () => {
  return (
    <Box bg="primary6">
      <Center>
        <Box w="90%" py={10}>
          <Divider bg="white" />
          <Heading as="h1" my={5} textAlign="center">
            Dolor Domum
          </Heading>
          <FooterInfo>
            4400, Steyr, Austria
            <br />
            Damberggasse 10
          </FooterInfo>
          <FooterInfo>dolordomum1@gmail.com</FooterInfo>
          <FooterInfo>+436766249716</FooterInfo>
        </Box>
      </Center>
      <Stack w="100%" bg="blackAlpha.700" py={3} spacing={0}>
        <Text variant="footer">© Dolor Domum. All rights reserved</Text>
        <Text variant="footer">Site by idevtier</Text>
      </Stack>
    </Box>
  );
};
export default Footer;
