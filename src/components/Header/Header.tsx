import * as React from "react";

import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import Pineconelogo from "@/svg/Pineconelogo";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
export const Header = () => {
  return (
    <Grid width="full" component="div" px="120px" py="10px" display="flex">
      <Grid component="div" display="flex" gap="20px" width={"553px"}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <Pineconelogo />
        </IconButton>
        <Button color="inherit"> НҮҮР</Button>
        <Button color="inherit"> ХООЛНЫ ЦЭС</Button>
        <Button color="inherit"> ХҮРГЭЛТИЙН БҮС</Button>
      </Grid>
      <Grid>
        <Paper></Paper>
      </Grid>
    </Grid>
  );
};

export default Header;
