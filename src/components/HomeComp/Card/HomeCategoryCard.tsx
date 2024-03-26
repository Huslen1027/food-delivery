import { Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import Link from "next/link";
import { CardDesign } from "./CardDesign";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import foods from "@/utils/HomeCard/Homecard";
const HomeCategoryCard = ({ category }: { category: string }) => {
  const categoryFoods = foods.filter((item: any) => item.category === category);

  return (
    <Container maxWidth="lg" sx={{ padding: "20px 0" }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        my={4}
        position="relative"
        zIndex={10}
      >
        <Typography>{category}</Typography>
        <Link href="/foods">
          <Stack direction="row" alignItems="center">
            Бүгдийг харах
            <ChevronRightIcon />
          </Stack>
        </Link>
      </Stack>
      <Grid container columnSpacing={3} rowSpacing={6}>
        {categoryFoods.slice(0, 4).map((item) => (
          <Grid item xs={3} key={item.title}>
            <CardDesign food={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeCategoryCard;
