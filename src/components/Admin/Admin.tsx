import { Grid, Stack, Typography } from "@mui/material";
import Foodmenu from "@/utils/Foodmenu";
export const Admin = () => {
  return (
    <>
      <Stack
        maxWidth={"lg"}
        margin={"auto"}
        sx={{
          backgroundColor: "#F7F7F8",
        }}
      >
        <Stack
          display={"flex"}
          width={"302px"}
          height={"1228px"}
          direction={"column"}
          alignItems={"start"}
          py={"26px"}
          pr={"24px"}
          gap={"40px"}
          sx={{
            background: "#FFF",
          }}
        >
          <Stack>
            <Typography fontSize={"22px"} fontWeight={"550"}>
              Food menu
            </Typography>
          </Stack>
          <Stack
            display={"flex"}
            direction={"column"}
            gap={"26px"}
            alignItems={"start"}
          >
            {Foodmenu.map((e, index) => {
              return (
                <Stack
                  key={index}
                  width={"258px"}
                  direction={"row"}
                  px={"16px"}
                  py={"8px"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  borderRadius={"8px"}
                  border={"1px solid #D6D8DB"}
                  height={"40px"}
                >
                  {e.text}
                  {e.icon}
                  {e.plusicon}
                  {e.create}
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
export default Admin;
