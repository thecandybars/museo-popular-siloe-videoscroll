import { createTheme } from "@mui/material";

// GENERAL USE THEME
const theme = {
  palette: {
    // title: {
    //   main: "#1b3832",
    //   light: "#459282",
    //   dark: "#122522",
    //   transparent: {
    //     light: "#459282aa",
    //   },
    // },
    primary: {
      main: "#fafafa",
      light: "#eee",
      dark: "#999",
    },
    secondary: {
      main: "#ffb810",
      light: "#e6c87f",
      dark: "#734D1F",
      transparent: {
        main: "#ffb810cc",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      ss: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
};
// MUI THEME
const muiTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: "Nunito",
    fontWeightRegular: 300,
    button: {
      textTransform: "none",
    },
    h1: {
      fontFamily: "Nunito",
      fontWeight: 500,
      fontSize: "4rem",
    },
    h2: {
      fontFamily: "Nunito",
      fontWeight: 500,
      fontSize: "1.5rem",
    },
    h3: {
      fontFamily: "Nunito",
      fontWeight: 700,
      fontSize: "1.1rem",
    },
    h4: {
      fontFamily: "Nunito",
      fontWeight: 500,
      fontSize: "1rem",
    },
    h5: {
      fontFamily: "Nunito",
      fontWeight: 500,
      fontSize: "1.3rem",
    },
    h6: {
      fontFamily: "Nunito",
      fontWeight: 300,
      fontSize: "1.1rem",
    },

    body1: {
      fontFamily: "Nunito Sans",
      fontWeight: 300,
      fontSize: "0.9rem",
    },

    caption: {
      fontFamily: "Nunito Sans",
      fontWeight: 300,
      fontSize: "0.75rem",
      marginY: 0,
    },
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 8,
          "&:last-child": {
            paddingBottom: 8,
          },
        },
      },
    },
  },
});

export { muiTheme, theme };
