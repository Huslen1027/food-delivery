import { Grid } from "@mui/material";
import { Homee } from "@/components/Home/Home";

export const Home = () => {
  return (
    <Grid
      display={"flex"}
      gap={"50px"}
      flexDirection={"column"}
      height={"3100px"}
    >
      <Homee />
    </Grid>
  );
};
export default Home;
