import Head from "next/head";
import Navbar from "../navbar.js";
import { Box } from "@chakra-ui/react";

const MainLayout = ({ children, router }) => {
  return (
    <Box as="main" bg="#34623f">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dolor Domum</title>
      </Head>
      <Navbar path={router.asPath} />
      <Box w="100%" bg="#34623f">
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
