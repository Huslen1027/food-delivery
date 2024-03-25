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

// <Cards data = {Category}></>

// function Cards(Category){
//   <p>Category</p>
//   const newData = dummy.filter((item)=>item.category == category)

//   {
//     newData.map((item=>return <Card data={item}>)
//   }
// }

// dummy = [
//   {
//     name: "egg",
//     category: "breakfast",
//     price: 120,
//   },
//   {
//     name: "meat",
//     category: "steak",
//     price: 120,
//   }

// ]
