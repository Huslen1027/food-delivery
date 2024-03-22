import { Grid } from "@mui/material";
import food from "@/utils/HomeCard/Homecard";
import MediaCard from "./MediaCard";
export const Cards = ({ category }: { category: string }) => {
  const categoryFoods = food.filter((item, index) => item.category == category);
  return (
    <Grid container columnSpacing={3} rowSpacing={6}>
      {categoryFoods.map((item, index) => (
        <Grid item xs={3}>
          <MediaCard food={item} key={item.title} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Cards;
