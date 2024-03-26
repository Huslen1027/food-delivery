import { Grid, Stack, Typography } from "@mui/material";
import { PineLogo } from "../../Icon/FooterIcon/PineLogo";
import { FaceBookLogo } from "../../Icon/FooterIcon/Facebooklogo";
import { TwitterLogo } from "../../Icon/FooterIcon/Twitterlogo";
import { InstragramLogo } from "../../Icon/FooterIcon/Instagramlogo";
import Link from "next/link";
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
        fontFamily={"nohi"}
        boxShadow={"sda"}
      >
        <Stack direction={"row"} gap={"10px"}>
          <PineLogo />
          <Typography color={"white"} fontSize={"20px"}>
            Food Delivery
          </Typography>
        </Stack>
        <Stack display="flex" direction={"row"} gap={"70px"} color={"white"}>
          <Link href={"/"}>
            <Typography
              sx={{
                color: "#FFF",
              }}
              borderBottom={"1px solid #FFF"}
            >
              Нүүр
            </Typography>
          </Link>
          <Typography
            sx={{
              color: "#FFF",
            }}
            borderBottom={"1px solid white"}
          >
            Холбоо барих
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
            }}
            borderBottom={"1px solid white"}
          >
            Хоолны цэс
          </Typography>
          <Link href={"/information/footerinformation4"}>
            <Typography
              sx={{
                color: "#FFF",
              }}
              borderBottom={"1px solid white"}
            >
              Үйлчилгээний нөхцөл
            </Typography>
          </Link>
          <Link href={"/information/footerinformation5"}>
            <Typography
              sx={{
                color: "#FFF",
              }}
              borderBottom={"1px solid white"}
            >
              Хүргэлтийн бүс
            </Typography>
          </Link>

          <Link href={"/information/footerinformation6"}>
            <Typography
              sx={{
                color: "#FFF",
              }}
              borderBottom={"1px solid white"}
            >
              Нууцлалын бодлого
            </Typography>
          </Link>
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
