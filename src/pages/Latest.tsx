import React from "react";
import { Box, Typography } from "@mui/material";

type Props = {};

const Latest = (props: Props) => {
  const drawerWidth = 320;
  return (
    <Box
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Typography variant="h6">Latest News</Typography>
    </Box>
  );
};

export default Latest;
