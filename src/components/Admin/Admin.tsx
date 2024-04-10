import { Stack, Typography } from "@mui/material";
import Foodmenu from "@/utils/Foodmenu";
import { useFoodData } from "../Context/FoodContext";
import { CardModal } from "../Cards/ModalCard";
import { useState } from "react";
import CreateCategoryCard from "../Cards/admincard/CreateCategoryCard";
import CreateFoodCard from "../Cards/admincard/CreateFoodCard";

export const Admin: React.FC = () => {
  const { foodData } = useFoodData();

  const [menu, setMenu] = useState<string>("Breakfast");

  const asd = (text: string) => {
    setMenu(text);
  };

  const buttonStyle = (category: string) => ({
    "&.MuiButtonBase-root:hover": {
      backgroundColor: menu === category ? "primary.main" : "white",
      boxShadow: "none",
    },
    boxShadow: "none",
    border: 1,
    borderColor: "#D6D8DB",
    borderRadius: "8px",
    padding: "8px 16px",
    width: 270,
    color: menu === category ? "white" : "black",
    backgroundColor: menu === category ? "primary.main" : "white",
  });

  return (
    <Stack
      gap={"30px"}
      direction="row"
      maxWidth="lg"
      margin="auto"
      sx={{
        backgroundColor: "#F7F7F8",
      }}
    >
      <Stack
        display="flex"
        width="302px"
        height="1228px"
        direction="column"
        alignItems="start"
        py="26px"
        pr="24px"
        gap="40px"
        sx={{
          background: "#FFF",
        }}
      >
        <Typography fontSize="22px" fontWeight="550">
          Food menu
        </Typography>

        <Stack display="flex" direction="column" gap="26px" alignItems="start">
          {Foodmenu.map((category: any, index: number) => (
            <Stack
              onClick={() => asd(category.text)}
              key={index}
              width="258px"
              direction="row"
              px="16px"
              py="8px"
              alignItems="center"
              justifyContent="space-between"
              borderRadius="8px"
              border="1px solid #D6D8DB"
              height="40px"
              sx={buttonStyle(category.text)}
            >
              {category.text}
              {category.icon}
            </Stack>
          ))}
          <CreateCategoryCard />
        </Stack>
      </Stack>
      <Stack
        display="inline-flex"
        height="1228px"
        direction="column"
        gap="32px"
        alignItems="start"
        width="894px"
        py="24px"
      >
        <Stack
          direction="row"
          width="854px"
          py="16px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontSize="22px" fontWeight="550">
            {menu}
          </Typography>
          <CreateFoodCard />
        </Stack>
        <Stack display="flex" direction="column" alignItems="center" gap="60px">
          <Stack gap={3} direction="row" flexWrap="wrap">
            {foodData
              .filter((item) => item.category === menu)
              .map((data, index) => (
                <CardModal key={index} data={data} />
              ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Admin;
