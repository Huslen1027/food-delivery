import {
  Stack,
  Typography,
  Button,
  TextField,
  FormControl,
  OutlinedInput,
  IconButton,
  FormGroup,
} from "@mui/material";
import * as React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
export const Login = () => {
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
      height={"700px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        width={"448px"}
        height={"600px"}
        direction={"column"}
        padding={"32px"}
        gap={"48px"}
      >
        <Typography fontSize={"28px"} textAlign={"center"}>
          Нэвтрэх
        </Typography>
        <Stack>
          <Typography fontSize={"14px"}>Имэйл </Typography>
          <FormGroup>
            <FormControl>
              <TextField
                sx={{
                  backgroundColor: "#F7F7F8",
                }}
                fullWidth
                id="fullWidth"
                placeholder="Имэйл хаягаа оруулна уу"
              />
            </FormControl>
            <FormControl sx={{ mt: 3, width: "100%" }} variant="outlined">
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
            <Typography
              sx={{
                color: "#3F4145",
              }}
              fontSize={"14px"}
              display={"flex"}
              justifyContent={"flex-end"}
            >
              Нууц үг сэргээх
            </Typography>
          </FormGroup>
        </Stack>
        <Stack direction="column" spacing={4}>
          <Button
            sx={{
              width: "384px",
              padding: "8px 16px",
              border: "2px solid #EEEFF2",
            }}
          >
            Нэвтрэх
          </Button>
          <Button sx={{ width: "384px", padding: "8px 16px" }}>Эсвэл</Button>
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
