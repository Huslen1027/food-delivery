import { Grid } from "@mui/material";
import { Homee } from "@/components/HomeComp/Home";
import HomeCategoryCard from "@/components/HomeComp/Card/HomeCategoryCard";
import { Advise } from "@/components/HomeComp/Advice";

export const Home = () => {
  return (
    <Grid
      display={"flex"}
      gap={"50px"}
      flexDirection={"column"}
      height={"3486px"}
    >
      <Homee />
      <Advise />
      <HomeCategoryCard />
    </Grid>
  );
};
export default Home;
