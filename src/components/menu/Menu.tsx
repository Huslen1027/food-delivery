import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { food } from "@/utils/HomeCard";
import dummyCategory from "@/utils/menu/Menu";
import CardDesign from "../HomeComp/Cards/CardDesign";

export const Menu = () => {
  const [menu, setMenu] = React.useState<string>("Breakfast");
  const handleSubmit = (item: string) => {
    setMenu(item);
  };
  return (
    <Container>
      <Stack
        my={"32px"}
        direction={"row"}
        justifyContent={"center"}
        gap={"26px"}
      >
        {dummyCategory.map((category) => (
          <Button
            onClick={() => handleSubmit(category)}
            key={category}
            disableRipple
            variant="contained"
          >
            <Typography
              fontSize={"16px"}
              fontWeight={500}
              sx={{ textTransform: "none" }}
            >
              {category}
            </Typography>
          </Button>
        ))}
      </Stack>
      <Stack mt={"54px"} mb={"80px"} gap={"60px"}>
        <Stack gap={3} direction={"row"} flexWrap={"wrap"}>
          {food
            .filter((item) => item.category == menu)
            .map((data, index) => (
              <CardDesign key={index} data={data} />
            ))}
        </Stack>
      </Stack>
    </Container>
  );
};
export default Menu;
