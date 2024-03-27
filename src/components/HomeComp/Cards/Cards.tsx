import { Stack, Typography } from "@mui/material";
import { Star } from "@/Icon/FooterIcon/Star";
export const Cards = () => {
  return (
    <Stack
      display={"flex"}
      direction={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Stack
        display={"flex"}
        width={"1440px"}
        direction={"column"}
        gap={"24px"}
      >
        <Stack
          direction={"row"}
          padding={"16px"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} gap={"5px"} alignItems={"center"}>
            <Star />
            <Typography color={"#272727"} fontSize={"22px"}>
               Хямдралтай
            </Typography>
          </Stack>

          <Stack direction={"row"} gap={"5px"}>
            <Typography>Бүгдийг харах</Typography>
            <Typography>1</Typography>
          </Stack>
        </Stack>
        <Stack></Stack>
      </Stack>
    </Stack>
  );
};
