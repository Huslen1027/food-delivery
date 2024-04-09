import { Stack, Typography } from "@mui/material";

export const CreatefoodFooter = () => {
  return (
    <Stack
      marginTop={"20px"}
      width={"587px"}
      height={"88px"}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"flex-end"}
      gap={"16px"}
      padding={"12px"}
      borderTop={"1px solid #E0E0E0"}
    >
      <Stack
        width={"65px"}
        height={"40px"}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"4px"}
        py={"10px"}
        px={"8px"}
        borderRadius={"4px"}
        sx={{
          cursor: "pointer",
        }}
      >
        <Typography fontWeight={"550"}>Clear</Typography>
      </Stack>
      <Stack
        width={"109px"}
        height={"40px"}
        px={"16px"}
        py={"10px"}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"4px"}
        borderRadius={"4px"}
        sx={{
          cursor: "pointer",

          backgroundColor: "#393939",
        }}
      >
        <Typography color={"white"}>Continue</Typography>
      </Stack>
    </Stack>
  );
};
export default CreatefoodFooter;
