import { Stack, Box } from "@mui/material";
import Image from "next/image";
export const Nuur = () => {
  return (
    <Stack
      width="full"
      component="div"
      height="788px"
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px="120px"
      sx={{
        backgroundColor: "#18BA51",
        backgroundImage: "url(/backImage.png)",
      }}
    >
      <Stack
        fontSize={"55px"}
        display={"flex"}
        gap={"20px"}
        sx={{
          direction: "column",
        }}
      >
        <Box
          lineHeight={"90%"}
          fontWeight={"510"}
          sx={{
            color: "#FFFFFF",
          }}
        >
          Pinecone Food delivery
        </Box>
        <Stack
          height={"1px"}
          sx={{
            backgroundColor: "white",
          }}
        ></Stack>
        <Box
          width={"360px"}
          sx={{
            color: "#FFFFFF",
          }}
          fontSize={"22px"}
        >
          Horem ipsum dolor sit amet, consectetur adipiscing elit.
        </Box>
      </Stack>
      <Stack display={"flex"} position={"relative"}>
        <Box zIndex={"1"} width={543} height={538}>
          <Image alt="" src="/tsuiwan.png" width={443} height={438} />
        </Box>
        <Box
          zIndex={"10"}
          position={"absolute"}
          top={"120px"}
          left={"280px"}
          width={543}
          height={538}
        >
          <Image alt="" src="/katsudon.png" width={313} height={313} />
        </Box>
      </Stack>
    </Stack>
  );
};
