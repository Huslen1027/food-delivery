import { Grid, Stack, Typography } from "@mui/material";
import { PineLogo } from "../Icon/FooterIcon/PineLogo";
import { FaceBookLogo } from "../Icon/FooterIcon/Facebooklogo";
import { TwitterLogo } from "../Icon/FooterIcon/Twitterlogo";
import { InstragramLogo } from "../Icon/FooterIcon/Instagramlogo";
export const Footer = () => {
  return (
    <Grid
      display={"flex"}
      width={"full"}
      height={"545px"}
      justifyContent={"center"}
      sx={{
        backgroundColor: "#18BA51",
        backgroundImage: "url(/backImage.png)",
      }}
    >
      <Stack
        display={"flex"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"1200px"}
        gap={"40px"}
      >
        <Stack direction={"row"} gap={"10px"}>
          <PineLogo />
          <Typography color={"white"} fontSize={"20px"}>
            Food Delivery
          </Typography>
        </Stack>
        <Stack display="flex" direction={"row"} gap={"70px"} color={"white"}>
          <Typography>Нүүр</Typography>
          <Typography>Холбоо барих</Typography>
          <Typography>Хоолны цэс</Typography>
          <Typography>Үйлчилгээний нөхцөл</Typography>
          <Typography>Хүргэлтийн бүс</Typography>
          <Typography>Нууцлалын бодлого</Typography>
        </Stack>
        <Stack display={"flex"} direction={"row"} gap={"18px"}>
          <FaceBookLogo />
          <InstragramLogo />
          <TwitterLogo />
        </Stack>
        <Stack
          width={"1200px"}
          height={"1px"}
          sx={{
            backgroundColor: "white",
          }}
        ></Stack>
        <Stack
          display={"flex"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"white"}
        >
          <Typography>© 2024 Pinecone Foods LLC </Typography>
          <Typography>Зохиогчийн эрх хуулиар хамгаалагдсан.</Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};
