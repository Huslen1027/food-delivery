import { Grid, List, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useCartItems } from "../Context/CartContext";

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

export const SearchText = () => {
  const { cartFoods } = useCartItems();
  console.log("data", cartFoods);

  const [searchList, setSearchList] = useState(cartFoods);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredList = cartFoods.filter((food) =>
      food.category.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchList(filteredList);
  };

  return (
    <Grid container direction="column">
      <Stack>
        <TextField
          onChange={handleOnChange}
          type="text"
          name="searchUser"
          label="Search"
        />
      </Stack>
      <List>
        {searchList.map((food) => (
          <Typography key={food.id}>{food.foodName}</Typography>
        ))}
      </List>
    </Grid>
  );
};

export default SearchText;
