import { extendTheme } from "@chakra-ui/react";
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
};

const styles = {
  global: {
    ".mdx-prose": {
      h1: {
        mt: "2em",
        mb: ".25rem",
        lineHeight: 1.25,
        fontWeight: "bold",
        fontSize: "1.875rem",
        letterSpacing: "-.025em",
      },
      h2: {
        mt: "2em",
        mb: "0.25em",
        lineHeight: 1.25,
        fontWeight: "semibold",
        fontSize: "1.5rem",
        letterSpacing: "-.025em",
        "& + h3": {
          mt: "1.5rem",
        },
      },
      h3: {
        mt: "2em",
        mb: "0.25em",
        lineHeight: 1.25,
        fontWeight: "semibold",
        fontSize: "1.25rem",
        letterSpacing: "-.025em",
      },
      h4: {
        mt: "2em",
        mb: "0.25em",
        lineHeight: 1.375,
        fontWeight: "semibold",
        fontSize: "1.125rem",
      },
      a: {
        color: "purple.300",
        textDecoration: "underline",
        transition: "color 0.15s",
        transitionTimingFunction: "ease-out",
        _hover: {
          color: "purple.400",
        },
      },
      p: {
        mb: "1.25rem",
        fontSize: "lg",
        lineHeight: 1.5,
        "blockquote &": {
          my: 0,
        },
      },
      hr: {
        my: "4rem",
      },
      blockquote: {
        "> p": {
          my: "0",
        },
      },
      ul: {
        mt: "1.5rem",
        ml: "1.25rem",
        "blockquote &": { mt: 0 },
        "& > * + *": {
          mt: "0.25rem",
        },
      },
      code: {
        rounded: "sm",
        px: "1",
        fontFamily: "Fira Code VF, Fira Code, sans-serif",
        fontSize: "0.875em",
        py: "2px",
        whiteSpace: "nowrap",
        lineHeight: "normal",
      },
    },
  },
};

const theme = extendTheme({ config, styles });
export default theme;
