import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Tech = (props: Props) => {
  const drawerWidth = 320;

  return (
    <Box
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Typography variant="h6">Tech</Typography>
    </Box>
  );
};

export default Tech;
