import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Business = (props: Props) => {
  const drawerWidth = 320;

  return (
    <Box
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Typography variant="h6">Business</Typography>
    </Box>
  );
};

export default Business;
