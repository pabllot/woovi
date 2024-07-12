import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: 'font-family: "Nunito", sans-serif;',
  },
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
        containedWarning: {
          "&:hover": {
            backgroundColor: "#03d69d",
            color: "#e9e9e9",
          },
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
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: "white",
          border: "1px solid gray",
          borderRadius: "50%",

          "&.Mui-active": {
            border: "2px solid #03D69D",
            color: "white",
          },
          "&.Mui-completed": {
            color: "#03D69D",
            border: "none",
          },
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderWidth: "2.5px",
          borderColor: "#E5E5E5",
        },
      },
    },
  },
});
