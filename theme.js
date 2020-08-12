import { deep, swiss } from "@theme-ui/presets";

const theme = {
  ...swiss,

  boxSizing: "border-box",
  containers: {
    card: {
      p: 2,
    },
    page: {
      width: ["100%", "98%"],
      maxWidth: "1280px",
      m: 0,
      mx: "auto",
      justifyContent: "center",
      height: "100%",
      py: "1rem",
      px: ["0.2rem", "2rem"],
    },
  },
  colors: {
    ...swiss.colors,
    modes: {
      dark: {
        ...deep.colors,
      },
    },
  },
  styles: {
    ...swiss.styles,
    a: {
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  images: {
    featured: {
      boxSizing: "border-box",
      maxWidth: "98%",
      mx: "auto",
      my: "2rem",
    },
  },
  buttons: {
    ...swiss.buttons,
    primary: {
      color: "text",
      bg: "muted",
      outline: "none",
      "&:hover": {
        cursor: "pointer",
        bg: "primary",
        color: "muted",
      },
      "&:disabled": {
        bg: "background",
        border: "1px solid",
        borderColor: "muted",
        cursor: "default",
        color: "initial",
      },
    },
  },
  text: {
    heading: {
      topHeading: {
        textAlign: "center",
        fontSize: "calc(2.1rem + 2.1vw)",
        pt: "2rem",
        mb: "1.25rem",
        fontWeight: "700",
      },
    },
  },
};

export default theme;
