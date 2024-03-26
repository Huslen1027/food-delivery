import foods from "@/utils/HomeCard/Homecard";
import { Grid } from "@mui/material";
import { CardDesign } from "./CardDesign";

const Cards = ({ category }: { category: string }) => {
  const categoryFoods = foods.filter((item: any) => item.category === category);
  return (
    <Grid container columnSpacing={3} rowSpacing={6}>
      {categoryFoods.map((item, index) => (
        <Grid item xs={3} key={index}>
          <CardDesign food={item} key={item.title} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
