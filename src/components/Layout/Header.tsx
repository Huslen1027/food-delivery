import * as React from "react";
import Searchicon from "../Icon/HeaderIcon/Searchicon";
import IconButton from "@mui/material/IconButton";
import { Button, InputBase, Stack } from "@mui/material";
import Pineconelogo from "../Icon/HeaderIcon/Pineconelogo";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PersonIcon from "../Icon/HeaderIcon/PersonIcon";
import ShoppingIcon from "../Icon/HeaderIcon/ShoppingIcon";
import { useRouter } from "next/router";
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
      <Grid component="div" display="flex" gap="20px">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2, justifyContent: "center", alignItems: "center" }}
        >
          <Pineconelogo />
        </IconButton>

        <Button
          onClick={() => {
            router.push("/");
          }}
          sx={{
            color: "#000",
            fontWeight: "540",
            fontSize: "16px",
          }}
        >
          НҮҮР
        </Button>

        <Button
          onClick={() => {
            router.push("/menu");
          }}
          sx={{
            color: "#000",
            fontWeight: "540",
            fontSize: "16px",
          }}
        >
          ХООЛНЫ ЦЭС
        </Button>

        <Button
          onClick={() => {
            router.push("/information/footerinformation5");
          }}
          sx={{
            color: "#000",
            fontWeight: "540",
            fontSize: "16px",
          }}
        >
          ХҮРГЭЛТИЙН БҮС
        </Button>
      </Grid>
      <Grid component="div" display="flex" gap="40px" alignItems="center">
        <Paper
          variant="outlined"
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "320px",
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
          <Stack
            direction={"row"}
            gap={"10px"}
            alignItems={"center"}
            width={"124px"}
          >
            <ShoppingIcon />
            <Button
              sx={{
                color: "#000",
                fontWeight: "540",
                fontSize: "16px",
              }}
            >
              Сагс
            </Button>
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

            <Button
              onClick={() => {
                router.push("/login");
              }}
              sx={{
                color: "#000",
                fontWeight: "540",
                fontSize: "16px",
              }}
            >
              Нэвтрэх
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
