import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Stack } from "@mui/material";

export const OrderAdress3 = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Stack
      mt={"13px"}
      display={"flex"}
      direction={"column"}
      width={"384px"}
      gap={"16px"}
      alignItems={"start"}
    >
      <Box sx={{ minWidth: 384 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Хороо сонгоно уу
          </InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="string"
            onChange={handleChange}
          >
            <MenuItem value={1}>1-р хороо</MenuItem>
            <MenuItem value={2}>2-р хороо</MenuItem>
            <MenuItem value={3}>3-р хороо</MenuItem>
            <MenuItem value={4}>4-р хороо</MenuItem>
            <MenuItem value={5}>5-р хороо</MenuItem>
            <MenuItem value={6}>6-р хороо</MenuItem>
            <MenuItem value={7}>7-р хороо</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Stack>
  );
};
