import { Button, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import Link from "next/link";
import MediaCard from "./MediaCard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import food from "@/utils/HomeCard/Homecard";
export const CategoryCards = ({ category }: { category: string }) => {
  const categoryFoods = food.filter((item, index) => item.category == category);

  return (
    <Container>
      <Stack></Stack>
      <Grid></Grid>
    </Container>
  );
};

export default CategoryCards;
