import { Button, Drawer, Stack, Typography } from "@mui/material";
import * as React from "react";
import BadgeCard from "../Cards/BadgeCard";
import { DrawerCard } from "../Cards";
import { useCartItems } from "../Context/CartContext";
import { useRouter } from "next/router";

export const BasketDrawer = () => {
  const router = useRouter();
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
      minHeight={"100vh"}
      sx={{ width: 586 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Stack>
        <Stack
          direction={"row"}
          width={"538px"}
          gap={"171px"}
          alignItems={"center"}
          height={"100px"}
        >
          <Stack
            px={"6px"}
            py={"2px"}
            width={"48px"}
            height={"48px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
            >
              <path
                d="M10.1125 0L11.8875 1.775L3.66245 10L11.8875 18.225L10.1125 20L0.112451 10L10.1125 0Z"
                fill="#1C1B1F"
              />
            </svg>
          </Stack>
          <Typography fontSize={"20px"} fontWeight={900}>
            Таны сагс
          </Typography>
        </Stack>
        <DrawerCard />
      </Stack>
      <Stack
        borderTop={1}
        borderColor={"#D6D8DB"}
        px={4}
        py={"10px"}
        width={"586px"}
        height={"172px"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack>
          <Typography color={"#5E6166"} fontSize={"18px"}>
            Нийт төлөх дүн
          </Typography>
          <Typography fontSize={"18px"} fontWeight={700}>
            {sum}₮
          </Typography>
        </Stack>
        <Button
          onClick={() => {
            router.push("/order");
          }}
          variant="contained"
          sx={{ color: "white", width: "256px", height: "48px" }}
        >
          Захиалах
        </Button>
      </Stack>
    </Stack>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          width: "20px",
        }}
      >
        {" "}
        <BadgeCard />
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
