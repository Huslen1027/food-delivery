import { Grid } from "@mui/material";
import { Homee } from "@/components/HomeComp/Home";

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
    </Grid>
  );
};
export default Home;
