import { Container, Link, Stack, Typography } from "@mui/material";
import { Star } from "../Icon/FooterIcon/Star";
import { ArrowIcon } from "../Icon/Homeicon/Adviceicons/ArrowICon";
import { CardModal } from "../Cards/CardModal";
import { useFoodData } from "../Context/FoodContext";
export const CategoryTab = ({ category }: { category: string }) => {
  const { foodData } = useFoodData();
  return (
    <Container>
      <Stack justifyContent={"space-between"} gap={3} marginTop={"50px"}>
        <Stack
          py={2}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack direction={"row"} alignItems={"center"}>
            <Star />
            <Typography fontWeight={700} fontSize={"22px"}>
              {category}
            </Typography>
          </Stack>
          <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
            <Stack gap="5px" direction={"row"} alignItems={"center"}>
              <Typography>Бүгдийг харах</Typography>
              <ArrowIcon />
            </Stack>
          </Link>
        </Stack>
        {category == "Sale" ? (
          <Stack direction={"row"} justifyContent={"space-between"}>
            {foodData
              .filter((item) => item.sale > 0)
              .slice(0, 4)
              .map((data, index) => {
                return <CardModal key={index} data={data} />;
              })}
          </Stack>
        ) : (
          <Stack direction={"row"} justifyContent={"space-between"}>
            {foodData
              .filter((item) => item.sale == 0)
              .filter((item) => item.category == category)
              .slice(0, 4)
              .map((data, index) => {
                return <CardModal key={index} data={data} />;
              })}
          </Stack>
        )}
      </Stack>
    </Container>
  );
};
