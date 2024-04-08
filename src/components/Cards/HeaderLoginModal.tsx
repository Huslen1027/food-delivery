import {
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  OutlinedInput,
  Stack,
  TextField,
  Box,
  Button,
  Typography,
  Modal,
} from "@mui/material";
import * as React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
export const HeaderLoginModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  const router = useRouter();
  return (
    <Stack>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        sx={{
          width: "full",
          height: "full",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={open}
        onClose={handleClose}
      >
        <Box
          width={"448px"}
          height={"599px"}
          component={"div"}
          display={"flex"}
          flexDirection={"column"}
          gap={"48px"}
          borderRadius={"16px"}
          sx={{
            backgroundColor: "#fff",
            border: "1px solid #DADCE0",
          }}
        >
          <Stack direction={"row"} width={"full"} justifyContent={"center"}>
            <Stack direction={"column"} py={"32px"} px={"8px"} gap={"38px"}>
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
                      onChange={HandleEmailCHange}
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
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      }
                    />
                  </FormControl>
                  <Grid onClick={() => router.push("/forgotpass")}>
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
                  </Grid>
                </FormGroup>
              </Stack>
              <Stack direction="column" spacing={4}>
                <Button
                  variant={"contained"}
                  sx={{
                    backgroundColor: input ? "#18BA51" : "#F7F7F8",
                    color: input ? "#FFF" : "#000",
                    width: "384px",
                    padding: "8px 16px",
                  }}
                >
                  Нэвтрэх
                </Button>
                <Button
                  sx={{ color: "#000", width: "384px", padding: "8px 16px" }}
                >
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
        </Box>
      </Modal>
    </Stack>
  );
};
export default HeaderLoginModal;
