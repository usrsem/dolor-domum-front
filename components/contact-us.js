import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  Heading,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const ContactInput = (props) => {
  const { isRequired, inputType, children } = props;
  return (
    <FormControl mb={2} isRequired={isRequired}>
      <FormLabel>{children}</FormLabel>
      <Input
        _focus={{
          border: "1px solid primary4",
          boxShadow: "0 0 0 1px primary4",
        }}
        borderRadius={0}
        type={inputType}
      />
    </FormControl>
  );
};

const ContactTextarea = (props) => {
  const { isRequired, children } = props;
  return (
    <FormControl mb={2} isRequired={isRequired}>
      <FormLabel>{children}</FormLabel>
      <Textarea
        _focus={{
          border: "1px solid primary4",
          boxShadow: "0 0 0 1px primary4",
        }}
        borderRadius={0}
      />
    </FormControl>
  );
};

const ContactUs = () => {
  const contactUsBgImg = "/images/callback/background.jpg";
  return (
    <Box
      w="100%"
      py={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundImage={`url(${contactUsBgImg})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box
        h="80%"
        px={10}
        py={7}
        w={{ base: "90%", md: "60%" }}
        bg="primary2"
        display="flex"
        flexDirection="column"
      >
        <Heading as="h1" textAlign="center" mb={7}>
          Contact us!
        </Heading>

        <ContactInput isRequired inputType="text">
          Fullname
        </ContactInput>
        <ContactInput isRequired inputType="email">
          E-mail
        </ContactInput>
        <ContactInput isRequired inputType="phone">
          Phone
        </ContactInput>
        <ContactTextarea>Message</ContactTextarea>
        <Button mt={7} alignSelf="flex-end" borderRadius={0}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
