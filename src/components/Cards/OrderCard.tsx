import { useCartItems } from "../Context/CartContext";
import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
export const OrderCard = () => {
  const router = useRouter();
  const { cartFoods } = useCartItems();

  let sum = 0;
  cartFoods.forEach((num) => {
    sum += num.price * num.count;
  });
  return (
    <Stack
      display={"flex"}
      direction={"column"}
      justifyContent={"space-between"}
      height={"100%"}
      width={"432px"}
    >
      <Stack>
        {cartFoods.map((data, index) => (
          <Stack
            borderTop={1}
            borderBottom={1}
            borderColor={"#D6D8DB"}
            py={"16px"}
            key={index}
            gap={2}
            direction={"row"}
            width={"384px"}
            height={"183px"}
          >
            <Box width={"50%"}>
              <CardMedia
                component="img"
                width="184"
                height="131"
                image={data.imagePath}
                alt="green iguana"
              />
            </Box>
            <Stack
              justifyContent={"space-around"}
              width={"50%"}
              height={"150px"}
            >
              <Stack direction={"row"} alignItems={"center"}>
                <Typography fontSize={"18px"} fontWeight={600}>
                  {data.foodName}
                </Typography>
              </Stack>

              <Typography color={"#18BA51"} fontWeight={600} fontSize={"18px"}>
                {data.price}₮
              </Typography>
              <Typography color={"#767676"}>
                {data.ingredients.map((e, index) =>
                  index === data.ingredients.length - 1 ? e : e + ","
                )}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>

      <Stack
        borderColor={"#D6D8DB"}
        py={"10px"}
        width={"404px"}
        height={"54px"}
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
            router.push("/user");
          }}
          variant="contained"
          sx={{ color: "white", width: "187px", height: "48px" }}
        >
          Захиалах
        </Button>
      </Stack>
    </Stack>
  );
};
