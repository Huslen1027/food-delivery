import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import DeleteIcon from "../../Icon/Modalicon/Deleteicon";
import Foodselect from "./Foodselect";
import CreatefoodFooter from "./CreateFoodFooter";
export const CreateFoodCard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Stack
        onClick={handleOpen}
        direction="row"
        px="16px"
        py="8px"
        height={"35px"}
        width="130px"
        alignItems="center"
        gap="1px"
        borderRadius="4px"
        sx={{
          backgroundColor: "#18BA51",
        }}
      >
        <Typography
          sx={{
            cursor: "pointer",
          }}
          fontSize="15px"
          color="#FFF"
        >
          Add new food
        </Typography>
      </Stack>
      <Modal
        sx={{
          border: "none",
          width: "full",
          height: "full",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          height={"904px"}
          component={"div"}
          display={"flex"}
          flexDirection={"column"}
          width={"587px"}
          alignItems={"start"}
          borderRadius={"16px"}
          border={"none"}
          sx={{
            backgroundColor: "#FFF",
          }}
        >
          <Stack
            width={"587px"}
            direction={"row"}
            py={"16px"}
            px={"24px"}
            alignItems={"center"}
            justifyContent={"space-between"}
            borderBottom={"1px solid #E0E0E0"}
          >
            <Stack
              sx={{
                cursor: "pointer",
              }}
              onClick={handleClose}
            >
              <DeleteIcon />
            </Stack>

            <Typography fontSize={"24px"} fontWeight={"550"}>
              Create food
            </Typography>
            <Stack></Stack>
          </Stack>
          <Stack>
            <Foodselect />
          </Stack>
          <Stack
            px={"24px"}
            display={"flex"}
            direction={"column"}
            gap={"8px"}
            alignItems={"start"}
            justifyContent={"center"}
            width={"539px"}
            height={"150px"}
          >
            <Typography>Хоолны зураг</Typography>
            <Stack
              width={"284px"}
              height={"122px"}
              display={"flex"}
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"8px"}
              borderRadius={"8px"}
              border={"1px dashed #D6D7DC"}
            >
              <Stack
                display={"flex"}
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"8px"}
              >
                <Typography
                  fontSize={"16px"}
                  fontWeight={"550"}
                  color={"#525252"}
                >
                  Add image for the food
                </Typography>
                <Stack
                  width={"114px"}
                  height={"40px"}
                  direction={"row"}
                  gap={"8px"}
                  borderRadius={"4px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{
                    cursor: "pointer",
                    backgroundColor: "#393939",
                  }}
                >
                  <Typography color={"#FFF"}>Add image</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <CreatefoodFooter />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateFoodCard;
