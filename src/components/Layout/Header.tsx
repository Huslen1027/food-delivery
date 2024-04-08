import * as React from "react";
// import HeaderLoginModal from "../Cards/HeaderLoginModal";
import Searchicon from "../Icon/HeaderIcon/Searchicon";
import IconButton from "@mui/material/IconButton";
import { InputBase, Stack, Typography } from "@mui/material";
import Pineconelogo from "../Icon/HeaderIcon/Pineconelogo";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PersonIcon from "../Icon/HeaderIcon/PersonIcon";
import { useRouter } from "next/router";
import { BasketDrawer } from "../Drawer/Drawer";
export const Header = () => {
  const router = useRouter();
  return (
    <Grid
      width="full"
      component="div"
      pt={"10px"}
      display="flex"
      justifyContent={"space-between"}
      maxWidth={"lg"}
      margin={"auto"}
    >
      <Grid component="div" display="flex" gap="25px" alignItems={"center"}>
        <IconButton
          onClick={() => router.push("/")}
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
        >
          <Pineconelogo />
        </IconButton>

        <Stack
          onClick={() => {
            router.push("/");
          }}
        >
          <Typography
            sx={{
              cursor: "pointer",
              color: "#000",
              fontWeight: "550",
              fontSize: "14px",
            }}
          >
            НҮҮР
          </Typography>
        </Stack>

        <Stack
          onClick={() => {
            router.push("/menu");
          }}
        >
          <Typography
            sx={{
              cursor: "pointer",
              color: "#000",
              fontWeight: "550",
              fontSize: "14px",
            }}
          >
            ХООЛНЫ ЦЭС
          </Typography>
        </Stack>

        <Stack
          onClick={() => {
            router.push("/information/footerinformation5");
          }}
        >
          <Typography
            sx={{
              cursor: "pointer",
              color: "#000",
              fontWeight: "550",
              fontSize: "14px",
            }}
          >
            ХҮРГЭЛТИЙН БҮС
          </Typography>
        </Stack>
      </Grid>
      <Grid component="div" display="flex" gap="10px" alignItems="center">
        <Paper
          variant="outlined"
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "270px",
            borderRadius: "8px",
            borderColor: "black",
            height: "45px",
            borderWidth: "1.5px",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="search">
            <Searchicon />
          </IconButton>
          <InputBase placeholder="Хайх" type="text" />
        </Paper>
        <Grid display={"flex"}>
          <Stack direction={"row"} alignItems={"center"} width={"134px"}>
            <BasketDrawer />
            <Stack>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: "550",
                  fontSize: "15px",
                }}
              >
                Сагс
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            gap={"10px"}
            width={"124px"}
            sx={{
              alignItems: "center",
            }}
          >
            <PersonIcon />
            {/* <HeaderLoginModal /> */}
            <Stack
              onClick={() => {
                router.push("/login");
              }}
            >
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: "550",
                  fontSize: "15px",
                }}
              >
                Нэвтрэх
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
