import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#18BA51",
    },
  },
});

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}></ThemeProvider>;
};
