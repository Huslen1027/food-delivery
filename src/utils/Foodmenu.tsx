import { PlusIcon } from "@/components/Icon/adminicon/PlusIcon";
import { MenuIcon } from "@/components/Icon/adminicon/MenuIcon";
export const Foodmenu = [
  { text: "Breakfast", icon: <MenuIcon /> },
  {
    text: "Soup",
    icon: <MenuIcon />,
  },
  {
    text: "Maincourse",
    icon: <MenuIcon />,
  },
  {
    text: "Desserts",
    icon: <MenuIcon />,
  },
  {
    plusicon: <PlusIcon />,
    create: "Create new category",
  },
];
export default Foodmenu;
