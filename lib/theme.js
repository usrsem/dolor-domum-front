import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#fff", "#1e2f23")(props),
    },
  }),
};

const components = {
  Text: {
    variants: {
      section: {
        fontFamily: "'Bitter'",
        fontWeight: 100,
        fontSize: 18,
        textAlign: "justify",
      },
      footer: {
        fontFamily: "'Bitter'",
        fontWeight: 100,
        textAlign: "center",
      },
    },
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: "'Bitter'",
};

const colors = {
  glassTeal: "#88ccca",
  primary1: "#1e2f23",
  primary2: "#34623f",
  primary3: "#607744",
  primary4: "#768948",
  primary5: "#b39c4d",
  primary6: "#6c584c",
  white: "#fff",
};

const theme = extendTheme({
  config,
  fonts,
  colors,
  styles,
  components,
});

export default theme;
