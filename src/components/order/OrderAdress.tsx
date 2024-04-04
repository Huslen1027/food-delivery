import { InputLabel, Stack, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
export const OrderAdress = () => {
  const [adress1, setAdress1] = React.useState("");

  const handleChange1 = (event: SelectChangeEvent) => {
    setAdress1(event.target.value as string);
  };
  const [adress2, setAdress2] = React.useState("");

  const handleChange2 = (event: SelectChangeEvent) => {
    setAdress2(event.target.value as string);
  };
  const [adress3, setAdress3] = React.useState("");

  const handleChange3 = (event: SelectChangeEvent) => {
    setAdress3(event.target.value as string);
  };
  return (
    <Stack
      display={"flex"}
      direction={"column"}
      width={"384px"}
      gap={"16px"}
      alignItems={"start"}
    >
      <Typography>Хаяг аа оруулна уу</Typography>
      <Box sx={{ minWidth: 384, backgroundColor: "#F7F7F8" }}>
        <FormControl fullWidth>
          <InputLabel>Дүүрэг сонгоно уу</InputLabel>
          <Select value={adress1} onChange={handleChange1}>
            <MenuItem value={0}>Дүүрэг сонгоно уу</MenuItem>
            <MenuItem value={10}>Баянзүрх дүүрэг</MenuItem>
            <MenuItem value={20}>Хан-Уул дүүрэг</MenuItem>
            <MenuItem value={30}>Баянгол дүүрэг</MenuItem>
            <MenuItem value={40}>Сонгинохайрхан дүүрэг</MenuItem>
            <MenuItem value={50}>Чингэлтэй дүүрэг</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 384, backgroundColor: "#F7F7F8" }}>
        <InputLabel>Хороо сонгоно уу</InputLabel>
        <FormControl fullWidth>
          <Select
            value={adress2}
            onChange={handleChange2}
            placeholder="Дүүрэг сонгоно уу"
          >
            <MenuItem value={10}>1-р хороо</MenuItem>
            <MenuItem value={20}>2-р хороо</MenuItem>
            <MenuItem value={20}>3-р хороо</MenuItem>
            <MenuItem value={20}>4-р хороо</MenuItem>
            <MenuItem value={20}>5-р хороо</MenuItem>
            <MenuItem value={20}>6-р хороо</MenuItem>
            <MenuItem value={20}>7-р хороо</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 384, backgroundColor: "#F7F7F8" }}>
        <FormControl fullWidth>
          <InputLabel>Байр, гудамж сонгоно уу</InputLabel>
          <Select value={adress3} onChange={handleChange3}>
            <MenuItem value={10}>Нархан хотхон</MenuItem>
            <MenuItem value={20}>26-р байр</MenuItem>
            <MenuItem value={30}>Хоймор хотхон</MenuItem>
            <MenuItem value={30}> 45-р байр</MenuItem>
            <MenuItem value={30}>Зайсан хотхон </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Stack>
  );
};
