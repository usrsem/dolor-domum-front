import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";

const ContactInput = (props) => {
  const { isRequired, inputType, children, placeholder } = props;
  return (
    <FormControl mb={2} isRequired={isRequired}>
      <FormLabel>{children}</FormLabel>
      <Input
        placeholder={placeholder}
        _focus={{
          border: "1px solid #cecece",
          boxShadow: "0 0 0 1px #cecece",
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
          border: "1px solid #cecece",
          boxShadow: "0 0 0 1px #cecece",
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

        <ContactInput
          isRequired
          inputType="text"
          placeholder="Markus Bergstein"
        >
          Fullname
        </ContactInput>
        <ContactInput
          isRequired
          inputType="email"
          placeholder="markus.bergstein@gmx.com"
        >
          E-mail
        </ContactInput>
        <ContactInput isRequired placeholder="+431234567890" inputType="phone">
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
