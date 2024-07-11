import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#133A6F",
      contrastText: "#f1f1f1",
    },
    warning: {
      main: "#e9e9e9",
      contrastText: "#03d69d",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: "none",
          outline: "none",
          boxShadow: "none",
        },
      },
    },
  },
});
