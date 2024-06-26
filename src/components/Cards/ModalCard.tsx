import React from "react";
import {
  Typography,
  CardMedia,
  Button,
  Modal,
  Box,
  Stack,
} from "@mui/material";
import { FoodCard } from ".";
import { useCartItems } from "../Context/CartContext";
import DeleteIcon from "../Icon/Modalicon/Deleteicon";

interface data {
  id: number;
  category: string;
  foodName: string;
  imagePath: string;
  ingredients: string[];
  price: number;
  sale: number;
  stock: number;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 981,
  height: 564,
  bgcolor: "background.paper",
  borderRadius: 4,
  p: 4,
};

const buttonStyle = {
  maxWidth: "45px",
  maxHeight: "45px",
  minWidth: "45px",
  minHeight: "45px",
  color: "white",
  borderRadius: "10px",
};

export const CardModal = ({ data }: { data: data }) => {
  const [open, setOpen] = React.useState(false);
  const [buyCount, setBuyCount] = React.useState(1);
  const { cartFoods, setCartFoods } = useCartItems();

  const sumHandler = () => setBuyCount(buyCount + 1);
  const subHandler = () => {
    const newCount = buyCount - 1;
    newCount < 1 ? setBuyCount(1) : setBuyCount(newCount);
  };

  const onSubmit = () => {
    const cartData = {
      id: data.id,
      category: data.category,
      foodName: data.foodName,
      imagePath: data.imagePath,
      ingredients: data.ingredients,
      price: data.price,
      sale: data.sale,
      stock: data.stock,
      count: buyCount,
    };
    setCartFoods([...cartFoods, cartData]);
    handleClose();
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Box onClick={() => setOpen(true)}>
        <FoodCard data={data} />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack sx={style} direction={"row"} gap={"33px"}>
          <Box width="500px" height="500px">
            <CardMedia
              component="img"
              width="500"
              height="500"
              image={data.imagePath}
              alt="green iguana"
            />
          </Box>

          <Stack gap={4} width={"380px"} justifyContent={"center"}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              gap={"30px"}
            >
              <Typography fontSize={"28px"} fontWeight={700}>
                {data.foodName}
              </Typography>
              <Button onClick={() => setOpen(false)}>
                <DeleteIcon />
              </Button>
            </Stack>
            <Typography fontSize={"18px"} fontWeight={600} color={"#18BA51"}>
              {data.sale === 0
                ? data.price
                : data.price - (data.price * data.sale) / 100}
              ₮
            </Typography>
            <Stack gap={"12px"}>
              <Typography fontSize={"18px"} fontWeight={600}>
                Орц
              </Typography>
              <Typography color={"#767676"} p={1}>
                {data.ingredients.map((ingredient, index) =>
                  index === data.ingredients.length - 1
                    ? ingredient
                    : ingredient + ","
                )}
              </Typography>
            </Stack>
            <Typography fontSize={"18px"} fontWeight={600}>
              Тоо
            </Typography>
            <Stack
              gap={"20px"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Button onClick={subHandler} sx={buttonStyle} variant="contained">
                <Typography fontWeight={900}>-</Typography>
              </Button>
              <Typography py={1} px={"30px"} height={"40px"}>
                {buyCount}
              </Typography>
              <Button onClick={sumHandler} sx={buttonStyle} variant="contained">
                <Typography fontWeight={900}>+</Typography>
              </Button>
            </Stack>
            <Button
              onClick={onSubmit}
              disableRipple
              sx={{ color: "white" }}
              variant="contained"
            >
              Сагслах
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
};
