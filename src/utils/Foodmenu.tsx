import { PlusIcon } from "@/components/Icon/adminicon/PlusIcon";
import { MenuIcon } from "@/components/Icon/adminicon/MenuIcon";
export const Foodmenu = [
  { text: "Breakfast", icon: <MenuIcon /> },
  {
    text: "Salads and Appetizers",
    icon: <MenuIcon />,
  },
  {
    text: "Main Dish",
    icon: <MenuIcon />,
  },
  {
    text: "Dessert",
    icon: <MenuIcon />,
  },
  {
    plusicon: <PlusIcon />,
    create: "Create new category",
  },
];
export default Foodmenu;
