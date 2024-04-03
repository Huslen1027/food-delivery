import * as React from "react";
import Badge from "@mui/material/Badge";
import { useCartItems } from "../Context/CartContext";
import ShoppingIcon from "../Icon/HeaderIcon/ShoppingIcon";
export const BadgeCard = () => {
  const { cartFoods } = useCartItems();
  return (
    <Badge badgeContent={cartFoods.length} color="primary">
      <ShoppingIcon />
    </Badge>
  );
};
export default BadgeCard;
