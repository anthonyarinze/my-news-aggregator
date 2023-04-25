import { Box } from "@mui/material";
import React from "react";

type Props = {};

const Cards = (props: Props) => {
  return (
    <Box
      sx={{
        ml: "2.75rem",
        mt: "2rem",
        width: "25vw",
        height: "40vh",
        backgroundColor: "red",
        borderRadius: "4.5px",
      }}
    >
      <Box
        sx={{
          height: "50%",
          backgroundColor: "white",
        }}
      ></Box>
    </Box>
  );
};

export default Cards;
