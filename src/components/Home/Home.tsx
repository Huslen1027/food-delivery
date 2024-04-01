import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { CategoryTab } from "./CategoryTab";
import { Advise } from "./Advice";
export const Homee = () => {
  const theme = useTheme();
  return (
    <Stack width={"full"} mb={"80px"}>
      <Box bgcolor={"#18BA51"} sx={{ backgroundImage: "url(/backImage.png)" }}>
        <Container maxWidth={"lg"}>
          <Stack
            height={"788px"}
            direction={"row"}
            alignItems={"center"}
            position={"relative"}
            gap={"180px"}
          >
            <Stack
              width={"370px"}
              gap={"23px"}
              color={theme.palette.primary.light}
            >
              <Typography
                color={"white"}
                fontSize={"55px"}
                fontWeight={"600"}
                lineHeight={1}
              >
                Pinecone Food delivery
              </Typography>
              <Divider
                component="div"
                sx={{ border: "1px solid white", width: "100%" }}
              />
              <Typography color={"white"} fontSize={"22px"} fontWeight={"500"}>
                Horem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Stack>
            <Image src="/tsuiwan.png" width={443} height={438} alt="" />

            <Stack
              marginLeft={"840px"}
              marginTop={"120px"}
              position={"absolute"}
            >
              <Image src="/katsudon.png" width={313} height={313} alt="" />
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Advise />

      <CategoryTab category={"Sale"} />
      <CategoryTab category={"Main Dish"} />
      <CategoryTab category={"Salads and Appetizers"} />
      <CategoryTab category={"Breakfast"} />
      <CategoryTab category={"Dessert"} />
    </Stack>
  );
};
