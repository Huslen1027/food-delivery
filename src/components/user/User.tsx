import { Button, CardMedia, Stack, Typography } from "@mui/material";
import { userData } from "@/utils/Userdata";
import EditIcon from "../Icon/userICon/EditIcon";
import ClockIcon from "../Icon/userICon/ClockIcon";
import GetoutIcon from "../Icon/userICon/GetoutICcon";
export const User = () => {
  return (
    <Stack
      direction={"row"}
      width={"full"}
      height={"800px"}
      justifyContent={"center"}
      paddingTop={"76px"}
    >
      <Stack
        direction={"column"}
        width={"432px"}
        gap={"16px"}
        height={"617px"}
        alignItems={"center"}
      >
        <Stack
          position={"relative"}
          alignItems={"center"}
          direction={"column"}
          gap={"40px"}
        >
          <Stack
            width={"120px"}
            height={"120px"}
            borderRadius={"50%"}
            sx={{
              backgroundColor: "lightgray",
            }}
          >
            <CardMedia
              component="img"
              height="120"
              width="120"
              alt=""
              src={"/Alexa-Demie.png"}
              sx={{
                borderRadius: "50%",
              }}
            />
          </Stack>

          <Typography textAlign={"center"} fontSize={"28px"}>
            Alexa Demie
          </Typography>
          <Stack
            border={"1px solid #D6D8DB"}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"34px"}
            height={"34px"}
            left={"100px"}
            top={"90px"}
            borderRadius={"50%"}
            position={"absolute"}
            sx={{
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
          >
            <EditIcon />
          </Stack>
        </Stack>
        <Stack
          paddingTop={"16px"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"40px"}
          sx={{
            backgroundColor: "#FFF",
            padding: "24px",
          }}
        >
          <Stack
            width={"432px"}
            gap={"16px"}
            direction={"column"}
            px={"20px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {userData.map((e, index) => (
              <Stack
                key={index}
                width={"392px"}
                height={"64px"}
                direction={"row"}
                py={"8px"}
                px={"20px"}
                gap={"8px"}
                alignItems={"center"}
                borderRadius={"4px"}
                border={"1px solid #D6D8DB"}
                sx={{
                  backgroundColor: "#F6F6F6",
                }}
              >
                {e.icon}
                <Stack
                  width={"264px"}
                  display={"flex"}
                  direction={"column"}
                  gap={"4px"}
                  alignItems={"start"}
                >
                  <Typography fontSize={"12px"} color={"#888A99"}>
                    {e.title}
                  </Typography>
                  <Typography fontSize={"17px"}> {e.name}</Typography>
                </Stack>
                <Stack sx={{ cursor: "pointer" }}> {e.editIcon}</Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default User;
