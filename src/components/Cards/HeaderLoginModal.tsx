import React, { useState } from "react";
import {
  Stack,
  Typography,
  Modal,
  Box,
  FormControl,
  FormGroup,
  TextField,
  OutlinedInput,
  IconButton,
  Button,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
const HeaderLoginModal = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState(false);
  const router = useRouter();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
    setInput(!!e.target.value && !!password);
  };
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
    setInput(!!e.target.value && !!email);
  };
  return (
    <Stack>
      <Stack onClick={handleOpen}>
        <Typography
          sx={{
            cursor: "pointer",
            color: "#000",
            fontWeight: "550",
            fontSize: "15px",
          }}
        >
          Нэвтрэх
        </Typography>
      </Stack>
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
                      onChange={handleEmailChange}
                      placeholder="Имэйл хаягаа оруулна уу"
                    />
                  </FormControl>
                  <FormControl sx={{ mt: 3, width: "100%" }} variant="outlined">
                    <Typography fontSize={"14px"}>Нууц үг</Typography>
                    <OutlinedInput
                      onChange={handlePasswordChange}
                      sx={{
                        backgroundColor: "#F7F7F8",
                      }}
                      placeholder="Нууц үг"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
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
