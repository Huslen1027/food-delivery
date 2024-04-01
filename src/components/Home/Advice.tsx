import { Grid, Stack, Typography } from "@mui/material";
import { AdviceData } from "@/utils/advice/Advise";
export const Advise = () => {
  return (
    <Grid
      maxWidth={"lg"}
      margin={"auto"}
      display={"flex"}
      alignContent={"center"}
      border={"black"}
      justifyContent={"space-between"}
      gap={"20px"}
      marginTop={"80px"}
    >
      {AdviceData.map((e, index) => (
        <Stack
          width={"264px"}
          height={"155px"}
          key={index}
          component={"div"}
          direction={"column"}
          borderRadius={"16px"}
          padding={"16px"}
          sx={{
            backgroundColor: "#FFF",
            boxShadow: "5px 5px 25px #D6D8DB",
          }}
        >
          <Stack gap={"10px"}>
            <Stack>{e.icon}</Stack>
            <Typography fontSize={"18px"} color={"black"}>
              {e.text1}
            </Typography>
            <Typography
              fontSize={"14px"}
              sx={{
                color: "#272727",
                opacity: "0.7",
              }}
            >
              {e.text2}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Grid>
  );
};
