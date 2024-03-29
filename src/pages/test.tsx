import { Cardone } from "@/components/HomeComp/Cards/Cardone";
import { Container, Stack } from "@mui/material";
import { food } from "@/utils/HomeCard";

const Page = () => {
  console.log("food", food);
  return (
    <Container>
      <Stack direction={"row"} flexWrap={"wrap"}>
        {food.map((data, index) => {
          return <Cardone key={index} data={data} />;
        })}
      </Stack>
    </Container>
  );
};
export default Page;
