import React from "react";
import { Box, Text, Center } from "@chakra-ui/react";
import Greeting from "../components/greeting.js";
import Footer from "../components/footer.js";

const AboutText = () => {
  return (
    <Box bg="primary4" py={7}>
      <Center>
        <Text variant="section" w={{ base: "90%", md: "70%" }}>
          We bring warmth and light into your home. Our company specializes in
          the design, development and installation of comfort systems for owners
          of existing homes and buildings. Our team is trained and certified in
          the installation of heat and solar systems. We care about the
          environment and only work with renewable energy sources. We understand
          that success depends on having highly trained, experienced
          professionals working toward the common goal of providing our
          customers with the most reliable system possible. We work hard and
          with a high degree of integrity. We take care of your time, property
          and investments to make you feel comfortable. We create the foundation
          for a sustainable, healthy environment, systems and partnerships. We
          think long-term. If we make a mistake, we'll do everything we can to
          correct it to your satisfaction. Give us a call and see what we can do
          for you.
        </Text>
      </Center>
    </Box>
  );
};

const About = () => {
  return (
    <>
      <Greeting title="About" imagePath="/images/main/4.jpg" />
      <AboutText />
      <Footer />
    </>
  );
};

export default About;
