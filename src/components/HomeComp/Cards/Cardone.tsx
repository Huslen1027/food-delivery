import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, Modal, Stack } from "@mui/material";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const Cardone = ({ data }) => {
  console.log("1fooddata:", data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div>
        <Stack onClick={handleOpen}>
          <Card sx={{ width: "280px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={data.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CardMedia
              component="img"
              height="140"
              image={data.image}
              alt="green iguana"
            />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {data.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {data.price}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};
