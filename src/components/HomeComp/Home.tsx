import { Stack, Typography } from "@mui/material";
import Image from "next/image";
export const Homee = () => {
  return (
    <Stack
      width="full"
      component="div"
      height="788px"
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-around"}
      px={"200px"}
      sx={{
        backgroundColor: "#18BA51",
        backgroundImage: "url(/backImage.png)",
      }}
    >
      <Stack
        display={"flex"}
        gap={"20px"}
        sx={{
          direction: "column",
        }}
      >
        <Typography
          width={"360px"}
          fontSize={"55px"}
          lineHeight={"90%"}
          fontWeight={"510"}
          sx={{
            color: "#FFFFFF",
          }}
        >
          Pinecone Food delivery
        </Typography>
        <Stack
          height={"1px"}
          sx={{
            backgroundColor: "white",
          }}
        ></Stack>
        <Typography
          width={"360px"}
          sx={{
            color: "#FFFFFF",
          }}
          fontSize={"22px"}
        >
          Horem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Stack>
      <Stack display={"flex"} position={"relative"}>
        <Typography zIndex={"1"} width={543} height={538}>
          <Image alt="" src="/tsuiwan.png" width={443} height={438} />
        </Typography>
        <Typography
          zIndex={"10"}
          position={"absolute"}
          top={"120px"}
          left={"280px"}
          width={543}
          height={538}
        >
          <Image alt="" src="/katsudon.png" width={313} height={313} />
        </Typography>
      </Stack>
    </Stack>
  );
};
