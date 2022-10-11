import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  Heading,
  Button,
  useToast,
} from "@chakra-ui/react";
import api from "../lib/telegram.js";

const ContactInput = (props) => {
  const { isRequired, inputType, children, placeholder, onChange, value } =
    props;
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
        onChange={onChange}
        value={value}
      />
    </FormControl>
  );
};

const ContactTextarea = (props) => {
  const { isRequired, children, value, placeholder, onChange } = props;
  return (
    <FormControl mb={2} isRequired={isRequired}>
      <FormLabel>{children}</FormLabel>
      <Textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        _focus={{
          border: "1px solid #cecece",
          boxShadow: "0 0 0 1px #cecece",
        }}
        borderRadius={0}
      />
    </FormControl>
  );
};

const ContactUs = ({ withBg, withTitle }) => {
  const contactUsBgImg = "/images/callback/background.jpg";
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [messageText, setMessage] = useState("");
  const toast = useToast();

  const handleFullnameChange = (e) => setFullname(e.target.value);
  const handleEmalChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const submit = () => {
    const message = {
      fullname,
      email,
      phone,
      text: messageText,
    };

    api.sendMessage(message).then(() => {
      setFullname("");
      setEmail("");
      setPhone("");
      setMessage("");
      toast({
        title: "Request sent.",
        description: "We'll contact you soon",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    });
  };

  return (
    <Box
      w="100%"
      py={withBg ? 10 : 0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundImage={withBg ? `url(${contactUsBgImg})` : ""}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box
        h={withBg ? "80%" : "100%"}
        px={withBg ? 10 : 0}
        py={withBg ? 7 : 0}
        w={withBg ? { base: "90%", md: "60%" } : "100%"}
        bg="primary2"
        display="flex"
        flexDirection="column"
      >
        <Heading
          as="h1"
          textAlign="center"
          mb={7}
          display={withTitle ? "inline-block" : "none"}
        >
          Contact us!
        </Heading>
        <ContactInput
          isRequired
          inputType="text"
          value={fullname}
          onChange={handleFullnameChange}
          placeholder="Markus Bergstein"
          children={"Fullname"}
        />
        <ContactInput
          isRequired
          inputType="email"
          value={email}
          onChange={handleEmalChange}
          placeholder="markus.bergstein@gmx.com"
          children={"E-mail"}
        />
        <ContactInput
          isRequired
          inputType="tel"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="+431234567890"
          children="Phone"
        />
        <ContactTextarea
          children="Message"
          onChange={handleMessageChange}
          value={messageText}
          placeholder="Message..."
        />
        <Button
          onClick={submit}
          mt="auto"
          alignSelf="flex-end"
          borderRadius={0}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
