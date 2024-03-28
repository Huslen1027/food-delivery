import { Grid } from "@mui/material";
import { Homee } from "@/components/HomeComp/Home";
import { Cards } from "@/components/HomeComp/Cards/Cards";
import { Advise } from "@/components/HomeComp/Advice";

export const Home = () => {
  return (
    <Grid display={"flex"} gap={"50px"} flexDirection={"column"}>
      <Homee />
      <Advise />
      <Cards />
    </Grid>
  );
};
export default Home;
