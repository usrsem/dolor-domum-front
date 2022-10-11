import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Section from "./section.js";

const Greeting = ({ title, text, imagePath, delay }) => {
  return (
    <Box
      w="100%"
      h={{ base: "calc(100vh - 3.5em)" }}
      px={10}
      display="flex"
      alignItems={{ base: "flex-start", md: "center" }}
      pt={{ base: "40vh", md: 0 }}
      justifyContent={{ base: "flex-start", md: "flex-end" }}
      backgroundImage={`url(${imagePath})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box w={{ base: "100%", md: "40%" }}>
        <Section delay={delay}>
          <Heading
            as="h1"
            textAlign={{ base: "left", md: "right" }}
            fontSize={62}
          >
            {title}
          </Heading>
          <Text
            textAlign={{ base: "left", md: "right" }}
            fontSize={32}
            fontFamily="'Bitter'"
          >
            {text}
          </Text>
        </Section>
      </Box>
    </Box>
  );
};

export default Greeting;
