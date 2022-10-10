import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Section from "./section.js";

const Greeting = ({ title, text, imagePath, delay }) => {
  return (
    <Box
      w="100%"
      px={10}
      display="flex"
      alignItems={{ base: "flex-start", md: "center" }}
      pt={{ base: "30vh", md: 0 }}
      justifyContent={{ base: "flex-start", md: "flex-end" }}
      h="calc(100vh - 3.5em)"
      backgroundImage={`url(${imagePath})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box pr={14} w={{ base: "80%", md: "40%" }}>
        <Section delay={delay}>
          <Heading as="h1" textAlign={{ base: "left", md: "right" }}>
            {title}
          </Heading>
          <Text textAlign={{ base: "left", md: "right" }}>{text}</Text>
        </Section>
      </Box>
    </Box>
  );
};

export default Greeting;
