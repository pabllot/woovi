import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#133A6F",
      contrastText: "#f1f1f1",
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
  },
});
