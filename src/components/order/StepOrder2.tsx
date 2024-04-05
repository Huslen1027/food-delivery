import { Stack, Typography } from "@mui/material";
import { OrderCard } from "../Cards/OrderCard";
export const StepOrder2 = () => {
  return (
    <Stack display={"flex"} direction={"column"} gap={"20px"}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        width={"432px"}
        height={"100px"}
        gap={"15px"}
      >
        <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"50%"}
            border={"1px solid #0468C8"}
            width={"48px"}
            height={"48px"}
            sx={{
              cursor: "pointer",
            }}
          >
            <Stack
              width={"24px"}
              height={"24px"}
              borderRadius={"50%"}
              sx={{
                backgroundColor: "#0468C8",
              }}
            ></Stack>
          </Stack>
        </Stack>
        <Stack>
          <Typography fontSize={"14px"} color={"#8B8E95"}>
            Алхам 2
          </Typography>
          <Typography fontSize={"20px"}>Захиалга баталгаажуулах</Typography>
          <Typography color={"#0468C8"} fontSize={"16px"}>
            Хүлээгдэж байна
          </Typography>
        </Stack>
      </Stack>
      <Stack
        overflow={"scroll"}
        display={"flex"}
        height={"712px"}
        padding={"24px"}
        direction={"column"}
        alignItems={"start"}
        borderRadius={"16px"}
        sx={{
          backgroundColor: "#FFF",
          boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.05)",
        }}
      >
        <OrderCard />
      </Stack>
    </Stack>
  );
};
export default StepOrder2;
