import React from "react";
import { Box, Image, Heading } from "@chakra-ui/react";

const Partner = ({ imagePath }) => {
  return (
    <Box
      display="inline-block"
      borderRadius="50%"
      border="3px solid #1e2f23"
      bg="white"
      m={2}
      position="relative"
      w={{ base: 100, md: 150 }}
      h={{ base: 100, md: 150 }}
      overflow="hidden"
    >
      <Image
        src={imagePath}
        w="100%"
        h="100%"
        objectFit="cover"
        alt="partner"
      />
    </Box>
  );
};

const Partners = () => {
  const partners = [
    "bosch",
    "buderus",
    "danfoss",
    "fronius",
    "jasolar",
    "kioto",
    "nibe",
    "sma",
    "solaredge",
    "sunpower",
    "viliant",
  ];
  return (
    <Box bg="primary4">
      <Heading as="h1" textAlign="center" py={7}>
        Our partners
      </Heading>
      <Box overflow="auto" whiteSpace="nowrap" pb={7}>
        {partners.map((logo, i) => (
          <Partner imagePath={`/images/partners/${logo}.png`} key={i} />
        ))}
      </Box>
    </Box>
  );
};

export default Partners;
