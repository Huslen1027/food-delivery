import { Grid } from "@mui/material";
import Header from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid>
      <Header />
      {children}
      <Footer />
    </Grid>
  );
};
