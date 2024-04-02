import { Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import * as React from "react";
import { DrawerCard } from "../Cards";
import { useCartItems } from "../Context/CartContext";

export const BasketDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const { cartFoods } = useCartItems();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  let sum = 0;
  cartFoods.forEach((num) => {
    sum += num.price * num.count;
  });
  const DrawerList = (
    <Stack
      sx={{ width: 586 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        direction={"row"}
        width={"538px"}
        gap={"171px"}
        alignItems={"center"}
        mb={"30px"}
      >
        <Stack
          px={"6px"}
          py={"2px"}
          width={"48px"}
          height={"48px"}
          justifyContent={"center"}
          alignItems={"center"}
        ></Stack>
        <Typography>Таны сагс</Typography>
      </Stack>
      <Divider />
      <Stack>
        <DrawerCard />
      </Stack>
      <Stack
        px={4}
        py={"10px"}
        width={"586px"}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Stack>
          <Typography color={"#5E6166"}>Нийт төлөх дүн</Typography>
          <Typography>{sum}</Typography>
        </Stack>
        <Button>Захиалах</Button>
      </Stack>
    </Stack>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}></Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
