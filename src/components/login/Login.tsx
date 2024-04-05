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
import Link from "next/link";
export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [input, setInput] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const HandleEmailCHange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setInput(!!e.target.value && !!password);
  };
  const HandlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setInput(!!e.target.value && !!email);
  };
  return (
    <Stack
      direction={"row"}
      px={"32px"}
      width={"full"}
      height={"800px"}
      justifyContent={"center"}
      paddingTop={"50px"}
    >
      <Stack
        width={"448px"}
        height={"500px"}
        direction={"column"}
        padding={"32px"}
        gap={"38px"}
      >
        <Typography fontSize={"28px"} textAlign={"center"}>
          Нэвтрэх
        </Typography>
        <Stack>
          <Typography fontSize={"14px"}>Имэйл </Typography>
          <FormGroup>
            <FormControl>
              <TextField
                onChange={HandleEmailCHange}
                sx={{
                  backgroundColor: input ? "#18BA51" : "#F7F7F8",
                }}
                fullWidth
                id="fullWidth"
                placeholder="Имэйл хаягаа оруулна уу"
              />
            </FormControl>
            <FormControl sx={{ mt: 3, width: "100%" }} variant="outlined">
              <Typography fontSize={"14px"}>Нууц үг</Typography>
              <OutlinedInput
                onChange={HandlePasswordChange}
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
              backgroundColor: input ? "#18BA51" : "#F7F7F8",
              color: "#000",
              width: "384px",
              padding: "8px 16px",
              ":hover": "#18BA51",
              border: "2px solid #EEEFF2",
            }}
          >
            Нэвтрэх
          </Button>
          <Button sx={{ color: "#000", width: "384px", padding: "8px 16px" }}>
            Эсвэл
          </Button>
          <Link href={"/signup"}>
            <Button
              sx={{
                color: "#000",

                width: "384px",
                padding: "8px 16px",
                border: "1px solid #18BA51",
              }}
            >
              Бүртгүүлэх
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
