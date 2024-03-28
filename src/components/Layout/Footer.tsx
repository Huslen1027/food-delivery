import { Grid, Stack, Typography } from "@mui/material";
import { PineLogo } from "../Icon/FooterIcon/PineLogo";
import { FaceBookLogo } from "../Icon/FooterIcon/Facebooklogo";
import { TwitterLogo } from "../Icon/FooterIcon/Twitterlogo";
import { InstragramLogo } from "../Icon/FooterIcon/Instagramlogo";
import { useRouter } from "next/router";

export const Footer = () => {
  const router = useRouter();
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
        maxWidth={"1440px"}
        margin={"auto"}
        display={"flex"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"full"}
        gap={"40px"}
      >
        <Stack direction={"row"} gap={"10px"}>
          <PineLogo />
          <Typography color={"white"} fontSize={"20px"}>
            Food Delivery
          </Typography>
        </Stack>
        <Stack display="flex" direction={"row"} gap={"70px"} color={"white"}>
          <Typography
            onClick={() => {
              router.push("/");
            }}
            sx={{
              textUnderlineOffset: "0",
              color: "#FFF",
            }}
            borderBottom={"1px solid #FFF"}
          >
            Нүүр
          </Typography>

          <Typography
            sx={{
              color: "#FFF",
            }}
            borderBottom={"1px solid white"}
          >
            Холбоо барих
          </Typography>
          <Typography
            onClick={() => {
              router.push("menu");
            }}
            sx={{
              color: "#FFF",
            }}
            borderBottom={"1px solid white"}
          >
            Хоолны цэс
          </Typography>

          <Typography
            onClick={() => {
              router.push("/information/footerinformation4");
            }}
            sx={{
              color: "#FFF",
            }}
            borderBottom={"1px solid white"}
          >
            Үйлчилгээний нөхцөл
          </Typography>

          <Typography
            onClick={() => {
              router.push("/information/footerinformation5");
            }}
            sx={{
              color: "#FFF",
            }}
            borderBottom={"1px solid white"}
          >
            Хүргэлтийн бүс
          </Typography>

          <Typography
            onClick={() => {
              router.push("/information/footerinformation6");
            }}
            sx={{
              color: "#FFF",
            }}
            borderBottom={"1px solid white"}
          >
            Нууцлалын бодлого
          </Typography>
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
