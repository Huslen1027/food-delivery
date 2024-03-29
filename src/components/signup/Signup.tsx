import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormGroup,
  IconButton,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import React from "react";

export const Signup = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Stack
      direction={"row"}
      px={"32px"}
      width={"full"}
      height={"800px"}
      justifyContent={"center"}
      marginTop={"80px"}
    >
      <Stack
        width={"448px"}
        height={"722px"}
        direction={"column"}
        padding={"32px"}
        gap={"20px"}
      >
        <Typography fontSize={"28px"} textAlign={"center"}>
          Бүртгүүлэх
        </Typography>
        <Stack>
          <FormGroup>
            <FormControl sx={{ gap: "10px" }}>
              <Typography fontSize={"14px"}>Нэр </Typography>
              <TextField
                sx={{
                  backgroundColor: "#F7F7F8",
                }}
                fullWidth
                placeholder="Нэрээ оруулна уу"
              />
              <Typography fontSize={"14px"}>И-мэйл </Typography>
              <TextField
                sx={{
                  backgroundColor: "#F7F7F8",
                }}
                fullWidth
                placeholder="И-мэйл хаягаа оруулна уу"
              />
              <Typography fontSize={"14px"}>Хаяг </Typography>
              <TextField
                sx={{
                  backgroundColor: "#F7F7F8",
                }}
                fullWidth
                placeholder="Та хаягаа оруулна уу"
              />
            </FormControl>

            <FormControl sx={{ mt: 2, width: "100%" }} variant="outlined">
              <Typography fontSize={"14px"}>Нууц үг</Typography>
              <OutlinedInput
                sx={{
                  backgroundColor: "#F7F7F8",
                }}
                placeholder="Нууц үг"
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                }
              />
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl sx={{ mt: 1, width: "100%" }} variant="outlined">
              <Typography fontSize={"14px"}>Нууц үг</Typography>
              <OutlinedInput
                sx={{
                  backgroundColor: "#F7F7F8",
                }}
                placeholder="Нууц үг давтах"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                }
              />
            </FormControl>
          </FormGroup>
        </Stack>
        <Stack direction="column" spacing={4}>
          <Stack direction={"row"} alignItems={"center"}>
            <Checkbox {...label} />
            <Typography fontSize={"15px"}>
              Үйлчилгээний нөхцөл зөвшөөрөх
            </Typography>
          </Stack>
          <Button
            sx={{
              width: "384px",
              padding: "8px 16px",
              border: "1px solid #18BA51",
            }}
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
