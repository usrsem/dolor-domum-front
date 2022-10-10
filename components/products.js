import React from "react";
import {
  Stack,
  Box,
  Image,
  Center,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

const Product = ({ productData, index }) => {
  return (
    <Box
      w="100%"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      p={7}
      bg={index % 2 === 0 ? "primary4" : "primary3"}
    >
      <Heading as="h1" mb={3} display={{ base: "inline-block", md: "none" }}>
        {productData.title}
      </Heading>
      <Box w={{ base: "100%", md: "50%" }}>
        <Center>
          <Image
            w="80%"
            h="90%"
            objectFit="cover"
            src={productData.imagePath}
            alt="product"
          />
        </Center>
      </Box>
      <Box w={{ base: "100%", md: "50%" }}>
        <Box display="flex" flexDirection="column">
          <Heading as="h1" display={{ base: "none", md: "inline-block" }}>
            {productData.title}
          </Heading>
          <Text variant="section" mt={3}>
            {productData.text}
          </Text>
          <Button alignSelf="flex-end" borderRadius={0} mt={4}>
            Request quotation
          </Button>
        </Box>
      </Box>
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
