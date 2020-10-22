import { theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    heading: "Inter",
    body: "Roboto",
    mono: "Inter",
  },
  colors: {
    ...theme.colors,
    background: {
      500: "rgb(12,31,53)",
    },
    footer: {
      500: "#252525",
    },
    copyright: {
      500: "#777777",
    },
  },
};

export default customTheme;
