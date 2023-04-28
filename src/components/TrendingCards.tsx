import { Box } from "@mui/material";
import React from "react";

type Props = {};

const TrendingCards = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "90%",
        height: "8.5vh",
        backgroundColor: "red",
        ml: "1.4rem",
        mt: "1.05rem",
        borderRadius: "3px",
      }}
    ></Box>
  );
};

export default TrendingCards;
