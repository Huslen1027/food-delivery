import { Grid, Stack, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { OrderAdress } from "./OrderAdress";
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
          backgroundColor: "#fff",
        }}
        border={"1px solid black"}
      >
        <Stack
          display={"flex"}
          direction={"column"}
          alignItems={"center"}
          gap={"40px"}
        >
          <Stack
            display={"flex"}
            direction={"column"}
            width={"384px"}
            gap={"16px"}
            alignItems={"start"}
          >
            <OrderAdress />
          </Stack>
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
              <TextField
                sx={{
                  border: "none",
                  width: "384px",
                  height: "112px",
                  backgroundColor: "#F7F7F8",
                }}
                placeholder="Имэйл Орц, давхар, орцны код ... "
              />
            </Grid>
            <Grid
              sx={{
                gap: "4px",
                alignItems: "start",
              }}
            >
              <Typography>Утасны дугаар*</Typography>
              <TextField
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
                  <Checkbox {...label} defaultChecked />
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
