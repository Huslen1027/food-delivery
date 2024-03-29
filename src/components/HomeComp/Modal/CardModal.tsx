import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import { CardMedia, Stack, Typography } from "@mui/material";
import CardDesign from "../Cards/CardDesign";
const style = {
  position: "absolute" as "absolute",
  padding: "32px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 981,
  height: 564,
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
  display: "flex",
};
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
export const CardModal = ({ data }: { data: dataType }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box>
        <Button onClick={handleOpen}>
          <CardDesign data={data} />
        </Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia image={data.image} />
          <Stack
            display={"flex"}
            direction={"column"}
            alignItems={"start"}
            gap={"32px"}
          >
            <Stack display={"flex"} direction={"row"}>
              <Typography>{data.title}</Typography>
              <Typography>{data.price}</Typography>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};
export default CardModal;
