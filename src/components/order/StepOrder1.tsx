import { Grid, Input, Stack, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { OrderAdress1 } from "./OrderAdress1";
import { OrderAdress2 } from "./OrderAdress2";
import { OrderAdress3 } from "./OrderAdress3";
export const StepOrder1 = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
            Алхам 1
          </Typography>
          <Typography fontSize={"20px"}>Хаягийн мэдээлэл оруулах</Typography>
          <Typography color={"#0468C8"} fontSize={"16px"}>
            Хүлээгдэж байна
          </Typography>
        </Stack>
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
          backgroundColor: "#FFF",
          boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Stack
          display={"flex"}
          direction={"column"}
          alignItems={"center"}
          gap={"40px"}
        >
          <Grid width={"384px"} gap={"16px"} alignItems={"start"}>
            <OrderAdress1 />
            <OrderAdress2 />
            <OrderAdress3 />
          </Grid>
          <Stack
            display={"flex"}
            direction={"column"}
            alignItems={"center"}
            gap={"32px"}
          >
            <Grid
              sx={{
                gap: "4px",
                alignItems: "start",
              }}
            >
              <Typography>Нэмэлт мэдээлэл</Typography>
              <Input
                placeholder="Орц, давхар, орцны код ..."
                sx={{
                  py: 1,
                  px: 2,
                  alignItems: "start",
                  border: "none",
                  width: "384px",
                  height: "112px",
                  backgroundColor: "#F7F7F8",
                }}
              ></Input>
            </Grid>
            <Grid
              sx={{
                gap: "4px",
                alignItems: "start",
              }}
            >
              <Typography>Утасны дугаар*</Typography>
              <TextField
                placeholder="Утасны дугаараа оруулна уу"
                sx={{
                  border: "none",
                  width: "384px",

                  backgroundColor: "#F7F7F8",
                }}
              />
            </Grid>
            <Stack
              display={"flex"}
              direction={"column"}
              alignItems={"start"}
              width={"384px"}
              height={"49px"}
            >
              <Typography>Төлбөр төлөх </Typography>
              <Stack direction={"row"} gap={"10px"}>
                <Stack direction={"row"} alignItems={"center"} width={"175px"}>
                  <Checkbox {...label} />
                  <Typography color={"#8B8E95"}>Бэлнээр</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} width={"175px"}>
                  <Checkbox {...label} />
                  <Typography color={"#8B8E95"}>Картаар</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default StepOrder1;
