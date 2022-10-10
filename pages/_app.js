import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "../components/layouts/main.js";
import Fonts from "../components/fonts.js";
import theme from "../lib/theme.js";

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <MainLayout router={router}>
        <Component {...pageProps} key={router.route} />
      </MainLayout>
    </ChakraProvider>
  );
};

export default Website;
