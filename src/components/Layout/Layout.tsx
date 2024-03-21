import { Grid } from "@mui/material";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid>
      <Header />
      {children}
      <Footer />
    </Grid>
  );
};
