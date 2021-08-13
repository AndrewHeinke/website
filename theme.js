import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: true,
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
});

export default customTheme;
