import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormGroup,
  IconButton,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";

export const StepTwo = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const btnStyle = {
    bgcolor: "#18BA51",
    padding: "5px",
    color: "#fff",
  };
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "full",
        height: "645px",
      }}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        width={"448px"}
        padding={"32px"}
        gap={"40px"}
        height={"330px"}
      >
        <Typography fontSize={"28px"} fontWeight={"550px"}>
          Нууц үг сэргээх
        </Typography>
        <Stack>
          <FormGroup>
            <Typography fontSize={"16px"} color={"#695C08"}>
              Таны example@pinecone.mn хаяг руу сэргээх код илгээх болно.
            </Typography>
            <FormControl sx={{ mt: 3, width: "100%" }} variant="outlined">
              <Typography fontSize={"14px"}>Нууц үг сэргээх код</Typography>
              <OutlinedInput
                sx={{
                  backgroundColor: "#F7F7F8",
                  width: "384px",
                  height: "54px",
                }}
                placeholder=""
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
        </Stack>
      </Stack>
      <Button sx={{ btnStyle }}>{"Үргэлжлүүлэх"}</Button>
    </Stack>
  );
};
export default StepTwo;
