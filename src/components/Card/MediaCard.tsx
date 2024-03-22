import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

type dataType = {
  title: string;
  image: string;
  price: number;
  discount: number;
};
type PropsType = {
  data: dataType;
};
export const MediaCard = (props: PropsType) => {
  const food = props.data;
  return (
    <Card
      sx={{
        maxWidth: "345px",
      }}
    >
      <CardMedia sx={{ height: 140 }} image={food.image} title="green iguana" />
      <CardContent>
        <Typography>{food.title}</Typography>
        <Stack direction={"row"}>
          <Typography>{food.price}</Typography>
          <Typography>{food.discount}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
export default MediaCard;
