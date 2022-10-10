import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import Section from "./section.js";

const ShortAbout = ({ text, imagePath, delay }) => {
  return (
    <Box
      h={{ base: "40vh", md: "60vh" }}
      bg="primary3"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box
        w={{ base: "100%", md: "50%" }}
        h={{ base: "100%", md: "100%" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text variant="section" fontSize={24} maxW={{ base: "80%", md: "60%" }}>
          {text}
        </Text>
      </Box>
      <Box
        display={{ base: "none", md: "flex" }}
        w="50%"
        h="100%"
        position="relative"
      >
        <Image src={imagePath} w="100%" h="100%" objectFit="cover" />
      </Box>
    </Box>
  );
};

export default ShortAbout;
