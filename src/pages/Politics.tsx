import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {};

function Politics({}: Props) {
  const drawerWidth = 320;

  return (
    <Box
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Typography variant="h6">Politics</Typography>
    </Box>
  );
}

export default Politics;
