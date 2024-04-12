import React, { useState } from "react";
import { Stack, TextField, Typography, Modal } from "@mui/material";
import Box from "@mui/material/Box";
import { PlusIcon } from "@/components/Icon/adminicon/PlusIcon";
import DeleteIcon from "@/components/Icon/Modalicon/Deleteicon";

export const CreateCategoryCard = () => {
  const [open, setOpen] = useState(false);
  const [clearCat, setClearCat] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCatchCat = () => setClearCat("");

  return (
    <div>
      <Stack
        onClick={handleOpen}
        width="268px"
        direction="row"
        px="16px"
        py="8px"
        gap="10px"
        alignItems="center"
        borderRadius="8px"
        border="1px solid #D6D8DB"
        height="40px"
        sx={{ cursor: "pointer" }}
      >
        <PlusIcon />
        <Typography color="#5E6166">Create new category</Typography>
      </Stack>
      <Modal
        sx={{
          width: "full",
          height: "full",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={open}
        onClose={handleClose}
      >
        <Box>
          <Stack
            display="flex"
            direction="column"
            alignItems="flex-start"
            width="587px"
            height="284px"
            borderRadius="16px"
            sx={{ backgroundColor: "#FFF" }}
          >
            <Stack
              width="587px"
              direction="row"
              py="16px"
              px="24px"
              justifyContent="space-between"
              alignItems="center"
              borderBottom="1px solid #E0E0E0"
            >
              <Stack sx={{ cursor: "pointer" }} onClick={handleClose}>
                <DeleteIcon />
              </Stack>
              <Typography fontSize="24px" fontWeight="550">
                Create new category
              </Typography>
              <Stack></Stack>
            </Stack>
            <Stack
              display="flex"
              direction="column"
              gap="16px"
              alignItems="flex-start"
              padding="24px"
            >
              <Stack
                display="flex"
                direction="column"
                gap="8px"
                justifyContent="center"
                alignItems="start"
              >
                <Typography>Category name</Typography>
                <TextField
                  sx={{
                    borderRadius: "8px",
                    backgroundColor: "#f4f4f4",
                    width: "539px",
                    gap: "12px",
                    height: "56px",
                  }}
                  variant="outlined"
                  value={clearCat}
                  onChange={(e) => setClearCat(e.target.value)}
                />
              </Stack>
            </Stack>
            <Stack
              width="587px"
              height="88px"
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              gap="16px"
              padding="24px"
              borderTop="1px solid #E0E0E0"
            >
              <Stack
                onClick={() => setClearCat("")}
                width="65px"
                height="40px"
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap="4px"
                py="10px"
                px="8px"
                borderRadius="4px"
                sx={{ cursor: "pointer" }}
              >
                <Typography fontWeight="550">Clear</Typography>
              </Stack>
              <Stack
                onClick={handleCatchCat}
                width="109px"
                height="40px"
                px="16px"
                py="10px"
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap="4px"
                borderRadius="4px"
                sx={{ cursor: "pointer", backgroundColor: "#393939" }}
              >
                <Typography color="white">Continue</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};
export default CreateCategoryCard;
