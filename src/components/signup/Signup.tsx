import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormGroup,
  IconButton,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const HandleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setInput(!!e.target.value && !!password);
  };
  const HandlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setInput(!!e.target.value && !!email);
  };
  const match = (condition: boolean, value1: string, value2: string) => {
    return condition ? value1 : value2;
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
                onChange={HandleEmailChange}
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
                onChange={HandlePasswordChange}
                sx={{
                  backgroundColor: "#F7F7F8",
                }}
                placeholder="Нууц үг"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
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
                onChange={HandlePasswordChange}
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
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"5px"}
            sx={{
              backgroundColor: match(input, "#18BA51", "#F7F7F8"),
              color: match(input, "#FFF", "#000"),
              width: "384px",
              padding: "8px 16px",
              height: "48px",
              cursor: "pointer",
            }}
          >
            Бүртгүүлэх
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
