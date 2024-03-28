import { Grid, Stack, Typography } from "@mui/material";
import { Adresses } from "@/utils/footer/Adresses";
import { Star } from "@/components/Icon/FooterIcon/Star";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/GoogleMap"), { ssr: false });
const footerinformation5 = () => {
  return (
    <Stack width={"full"} height={"1300px"} gap={"50px"} direction={"column"}>
      <Stack marginTop={"50px"} justifyContent={"center"} alignItems={"center"}>
        <Map />
      </Stack>
      <Stack
        display={"flex"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack width={"1200px"} height={"65px"} direction={"row"} gap={"10px"}>
          <Star />
          <Typography> Хүргэлтийн бүс дэх хаягууд</Typography>
        </Stack>
        <Grid display={"flex"} gap={"25px"}>
          {Adresses.map((e, index) => (
            <Stack
              key={index}
              width={"588px"}
              height={"388px"}
              padding={"24px"}
              gap={"8px"}
              borderRadius={"16px"}
              boxShadow={"0px 0px 10px 0px"}
              sx={{
                backgroundColor: "#FFF",
              }}
            >
              <Stack display={"flex"} direction={"column"} gap={"16px"}>
                <Stack
                  display={"flex"}
                  gap={"78x"}
                  alignItems={"start"}
                  borderBottom={"1px solid #18BA51"}
                  width={"540px"}
                >
                  <Typography fontSize={"20px"} fontWeight={500}>
                    А бүс
                  </Typography>
                </Stack>
                <Stack
                  display={"flex"}
                  direction={"row"}
                  alignItems={"start"}
                  gap={"16px"}
                >
                  <Stack
                    display={"flex"}
                    direction={"column"}
                    gap={"14px"}
                    width={"262px"}
                  >
                    <Typography>{e.text}</Typography>
                    <Typography>{e.textTwo}</Typography>
                    <Typography>{e.textThree}</Typography>
                    <Typography>{e.textFour}</Typography>
                    <Typography>{e.textFive}</Typography>
                    <Typography>{e.textSix}</Typography>
                    <Typography>{e.textSeven}</Typography>
                  </Stack>
                  <Stack
                    display={"flex"}
                    direction={"column"}
                    gap={"14px"}
                    width={"262px"}
                  >
                    <Typography>{e.text}</Typography>
                    <Typography>{e.textTwo}</Typography>
                    <Typography>{e.textThree}</Typography>
                    <Typography>{e.textFour}</Typography>
                    <Typography>{e.textFive}</Typography>
                    <Typography>{e.textSix}</Typography>
                    <Typography>{e.textSeven}</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default footerinformation5;
