import Searchicon from "@/components/Icon/HeaderIcon/Searchicon";
import { IconButton, InputBase, Paper, Stack, Typography } from "@mui/material";

export const Page = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#F7F7F8",
      }}
      width={"full"}
      height={"800px"}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        height={"624px"}
        width={"1024px"}
        display={"flex"}
        direction={"column"}
        alignItems={"flex-start"}
        borderRadius={"12px"}
        border={"1px solid #ECEDF0"}
        sx={{
          backgroundColor: "#FFF",
        }}
      >
        <Stack
          display={"flex"}
          direction={"column"}
          gap={"20px"}
          alignItems={"flex-start"}
        >
          <Stack
            direction={"row"}
            gap={"16px"}
            alignItems={"flex-start"}
            py={"20px"}
            px={"24px"}
          >
            <Typography width={"604px"} fontSize={"23px"} fontWeight={"550"}>
              Admin dashboard
            </Typography>
            <Paper
              variant="outlined"
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                width: "356px",
                borderRadius: "8px",
                border: "1px solid #ECEDF0",
                height: "36px",
                backgroundColor: "#F7F7F8",
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="search">
                <Searchicon />
              </IconButton>
              <InputBase placeholder="Search" type="text" />
            </Paper>
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"flex-start"}></Stack>
      </Stack>
    </Stack>
  );
};
export default Page;
