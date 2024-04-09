import { Stack, TextField, Typography } from "@mui/material";
import * as React from "react";
import Switch from "@mui/material/Switch";
export const Foodselect = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Stack
      display={"flex"}
      justifyContent={"center"}
      direction={"column"}
      alignItems={"start"}
      gap={"16px"}
      padding={"24px"}
    >
      <Stack
        display={"flex"}
        direction={"column"}
        gap={"8px"}
        justifyContent={"center"}
        alignItems={"start"}
      >
        <Typography>Хоолны нэр</Typography>
        <TextField
          sx={{
            borderRadius: "8px",
            backgroundColor: "#f4f4f4",
            width: "539px",
            gap: "12px",
            border: "none",
            height: "56px",
          }}
          id="outlined-basic"
          label="Placeholder"
          variant="outlined"
        />
      </Stack>
      <Stack
        display={"flex"}
        direction={"column"}
        gap={"8px"}
        justifyContent={"center"}
        alignItems={"start"}
      >
        <Typography>Хоолны ангилал</Typography>
        <TextField
          sx={{
            borderRadius: "8px",
            backgroundColor: "#f4f4f4",
            width: "539px",
            gap: "12px",
            border: "none",
            height: "56px",
          }}
          id="outlined-basic"
          label="Placeholder"
          variant="outlined"
        />
      </Stack>
      <Stack
        display={"flex"}
        direction={"column"}
        gap={"8px"}
        justifyContent={"center"}
        alignItems={"start"}
      >
        <Typography>Хоолны орц</Typography>
        <TextField
          sx={{
            borderRadius: "8px",
            backgroundColor: "#f4f4f4",
            width: "539px",
            gap: "12px",
            border: "none",
            height: "56px",
          }}
          id="outlined-basic"
          label="Placeholder"
          variant="outlined"
        />
      </Stack>
      <Stack
        display={"flex"}
        direction={"column"}
        gap={"8px"}
        justifyContent={"center"}
        alignItems={"start"}
      >
        <Typography>Хоолны үнэ</Typography>
        <TextField
          sx={{
            borderRadius: "8px",
            backgroundColor: "#f4f4f4",
            width: "539px",
            gap: "12px",
            border: "none",
            height: "56px",
          }}
          id="outlined-basic"
          label="Placeholder"
          variant="outlined"
        />
      </Stack>
      <Stack
        display={"flex"}
        direction={"column"}
        gap={"8px"}
        justifyContent={"center"}
        alignItems={"start"}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Typography>Хямдралтай эсэх</Typography>
        </Stack>

        <TextField
          sx={{
            borderRadius: "8px",
            backgroundColor: "#f4f4f4",
            width: "539px",
            gap: "12px",
            border: "none",
            height: "56px",
          }}
          id="outlined-basic"
          label="Placeholder"
          variant="outlined"
        />
      </Stack>
    </Stack>
  );
};
export default Foodselect;
