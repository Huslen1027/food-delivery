import { Box, Container, Stack } from "@mui/material";
import StepOrder1 from "./StepOrder1";
import StepOrder2 from "./StepOrder2";

export const Order = () => {
  return (
    <Box height={"1000px"} pt={"50px"}>
      <Container maxWidth={"lg"}>
        <Stack
          direction={"row"}
          width={"full"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack>
            <StepOrder1 />
          </Stack>
          <Stack>
            <StepOrder2 />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
export default Order;
