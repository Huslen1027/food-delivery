import { Stack, Typography } from "@mui/material";

export const CardDesign = () => {
  return (
    <Stack
      width={"282px"}
      height={"256px"}
      display={"flex"}
      direction={"column"}
      gap={"14px"}
    >
      <Stack width={"282px"} height={"186px"}>
        <Stack width={"282px"} height={"186px"} borderRadius={"16px"}></Stack>
        <Stack></Stack>
      </Stack>
      <Stack
        display={"flex"}
        direction={"column"}
        gap={"2px"}
        alignItems={"start"}
      >
        <Typography>Өглөөний хоол</Typography>
        <Stack direction={"row"} alignItems={"start"} gap={"16px"}></Stack>
      </Stack>
    </Stack>
  );
};
