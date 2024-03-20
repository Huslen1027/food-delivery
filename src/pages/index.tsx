import Header from "@/components/Header/Header";
import { Grid } from "@mui/material";
import { Nuur } from "@/components/HomeComp/Home";
export const Home = () => {
  return (
    <Grid
      display={"flex"}
      gap={"50px"}
      flexDirection={"column"}
      maxWidth={"1900px"}
      margin={"auto"}
    >
      <Header />
      <Nuur />
    </Grid>
  );
};
export default Home;
