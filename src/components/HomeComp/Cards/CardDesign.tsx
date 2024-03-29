import { CardMedia, Stack, Typography } from "@mui/material";

type dataType = {
  id: number;
  category: string;
  title: string;
  image: string;
  price: number;
  discount: number;
  ingredients: string[];
  stock: number;
};
const CardDesign = ({ data }: { data: dataType[] }) => {
  const datas = data.slice(0, 4);
  console.log(data);
  return (
    <Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        {datas.map((e, index) => {
          return (
            <Stack key={index} gap={"14px"}>
              <CardMedia
                component="img"
                image={e.image}
                width={282}
                height={186}
                alt=""
              />
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
                    {e.price}₮
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};
export default CardDesign;
