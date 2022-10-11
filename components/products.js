import React from "react";
import {
  Stack,
  Box,
  Image,
  Center,
  Button,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import ContactUs from "./contact-us.js";

const PopUp = ({ isOpen, onClose, children }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="primary2">
        <ModalHeader>Contact Us!</ModalHeader>
        <ModalCloseButton />
        <ModalBody pt={0} pb={3}>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const Product = ({ productData, index }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      w="100%"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      p={7}
      bg={index % 2 === 0 ? "primary4" : "primary3"}
    >
      <Heading
        as="h1"
        textAlign="center"
        mb={3}
        display={{ base: "inline-block", md: "none" }}
      >
        {productData.title}
      </Heading>
      <Box w={{ base: "100%", md: "50%" }}>
        <Center>
          <Image
            w="100%"
            h="90%"
            objectFit="cover"
            src={productData.imagePath}
            alt="product"
          />
        </Center>
      </Box>
      <Box w={{ base: "100%", md: "50%" }} pl={{ base: 0, md: 7 }}>
        <Box display="flex" flexDirection="column" h="100%">
          <Heading as="h1" display={{ base: "none", md: "inline-block" }}>
            {productData.title}
          </Heading>
          <Text variant="section" mt={3} alignSelf={{ base: "center" }}>
            {productData.text}
          </Text>
          <Button
            alignSelf="flex-end"
            borderRadius={0}
            mt={{ base: 4, md: "auto" }}
            onClick={onOpen}
          >
            Request quotation
          </Button>
        </Box>
      </Box>
      <PopUp isOpen={isOpen} onClose={onClose} children={<ContactUs />} />
    </Box>
  );
};

const Products = ({ data }) => {
  return (
    <Stack spacing={0}>
      {data.map((product, i) => (
        <Product productData={product} key={i} index={i} />
      ))}
    </Stack>
  );
};

export default Products;
