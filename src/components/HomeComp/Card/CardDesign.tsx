import { CardMedia, Grid, Stack, Typography } from "@mui/material";
import * as React from "react";
type PropType = {
  title: string;
  image: string;
  price: number;
  discount: number;
};
export const CardDesign = ({ food }: { food: PropType }) => {
  return (
    <Grid>
      <Stack width={"300px"} height={"280px"} direction={"column"}>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          title="green iguana"
          image="/CategoryImage1.png"
        />
        <Stack
          display={"flex"}
          direction={"row"}
          alignItems={"start"}
          width={"300px"}
          gap={"2px"}
        >
          <Typography>{food.title}</Typography>
          <Stack display={"flex"}>
            <Typography>{food.price}</Typography>
            <Typography>{food.discount}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};
