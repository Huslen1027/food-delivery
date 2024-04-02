import { Button, Stack, Typography } from "@mui/material";
import { Star } from "@/components/Icon/FooterIcon/Star";
import { food } from "@/utils/HomeCard";
import Image from "next/image";
import { useRouter } from "next/router";
export const Cards = () => {
  const router = useRouter();
  const filterFoods = food.filter((item) => item.discount > 0);
  const saleFoods = filterFoods.slice(0, 4);

  const Title = ["Үндсэн хоол", "Салад ба зууш", "Амттан"];
  return (
    <Stack gap={"60px"} marginBottom={10} maxWidth={"lg"} margin={"auto"}>
      <Stack gap={"10px"}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack
            direction={"row"}
            py={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Star />
            <Typography fontSize={"22px"} fontWeight={"700"}>
               Хямдралтай
            </Typography>
          </Stack>
          <Button
            onClick={() => {
              router.push("/login");
            }}
            style={{ textDecoration: "none" }}
          >
            <Typography
              fontSize={"14px"}
              color={"#18BA51"}
              justifyContent={"center"}
            >
              Бүгдийг харах
            </Typography>
          </Button>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          {saleFoods.map((e, index) => {
            return (
              <Stack key={index} gap={"14px"}>
                <Stack position={"relative"}>
                  <Image src={e.image} width={282} height={186} alt="" />
                  <Typography
                    px={2}
                    py={0.5}
                    border={"1.5px solid white"}
                    borderRadius={4}
                    fontWeight={"600"}
                    bgcolor={"#18BA51"}
                    color={"white"}
                    position={"absolute"}
                    marginTop={2}
                    marginLeft={24}
                  >
                    {e.discount}%
                  </Typography>
                </Stack>
                <Stack px={1.5}>
                  <Typography fontSize={"18px"} fontWeight={"600"}>
                    {e.title}
                  </Typography>
                  <Stack direction={"row"} gap={1}>
                    <Typography
                      fontSize={"18px"}
                      fontWeight={"600"}
                      color={"#18BA51"}
                    >
                      {e.price - (e.discount * e.price) / 100}₮
                    </Typography>
                    <Typography
                      fontSize={"18px"}
                      sx={{ textDecoration: "line-through" }}
                    >
                      {e.price}₮
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
      <Stack gap={3}>
        <Stack gap={3}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"row"} py={2} alignItems={"center"}>
              <Star />
              <Typography fontSize={"22px"} fontWeight={"700"}>
                  {Title}
              </Typography>
            </Stack>
            <Button
              sx={{
                fontSize: "14px",
                color: "#18BA51",
              }}
              onClick={() => {
                router.push("/menu");
              }}
              style={{ textDecoration: "none" }}
            >
              Бүгдийг харах
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Cards;
