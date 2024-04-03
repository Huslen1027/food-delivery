import { Stack, Typography } from "@mui/material";
import { DrawerCard } from "../Cards";
export const StepOrder2 = () => {
  return (
    <Stack display={"flex"} direction={"column"}>
      {" "}
      <Stack
        display={"flex"}
        direction={"column"}
        alignItems={"start"}
        width={"432px"}
        height={"100px"}
      >
        <Typography fontSize={"14px"} color={"#8B8E95"}>
          Алхам 2
        </Typography>
        <Typography fontSize={"20px"}>Захиалга баталгаажуулах</Typography>
        <Typography color={"#0468C8"} fontSize={"16px"}>
          Хүлээгдэж байна
        </Typography>
      </Stack>
      <Stack
        display={"inline-flex"}
        height={"712px"}
        padding={"24px"}
        direction={"column"}
        justifyContent={"space-between"}
        alignItems={"start"}
        borderRadius={"16px"}
        sx={{
          backgroundColor: "#fff",
        }}
        boxShadow={"0px 0px 20px 0px"}
      >
        <DrawerCard />
      </Stack>
    </Stack>
  );
};
export default StepOrder2;
