import * as React from "react";
import Searchicon from "../Icon/HeaderIcon/Searchicon";
import IconButton from "@mui/material/IconButton";
import { Button, InputBase, Stack, Typography } from "@mui/material";
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
          <Typography> НҮҮР</Typography>
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
          <Typography> ХООЛНЫ ЦЭС</Typography>
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
          <Typography> ХҮРГЭЛТИЙН БҮС</Typography>
        </Button>
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
            <Button
              sx={{
                color: "#000",
                fontWeight: "540",
                fontSize: "16px",
              }}
            >
              <Typography> Сагс</Typography>
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
              <Typography> Нэвтрэх</Typography>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
