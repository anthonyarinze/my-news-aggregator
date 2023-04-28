import { Box, Button, Typography } from "@mui/material";
import Divider from "./Divider";
import { ShareOutlined } from "@mui/icons-material";

type Props = {};

const Cards = (props: Props) => {
  return (
    <Box
      sx={{
        ml: "2.75rem",
        mt: "2rem",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        width: "23.5vw",
        height: "40vh",
        backgroundColor: "red",
        borderRadius: "4.5px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          bottom: 0,
          height: "50%",
          width: "100%",
          display: "flex",
          position: "absolute",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <Typography
          sx={{
            left: 20,
            bottom: 120,
            color: "black",
            textAlign: "left",
            paddingLeft: "1rem",
            whiteSpace: "nowrap",
            position: "absolute",
            paddingBottom: "1rem",
          }}
        >
          Business
        </Typography>
        <Typography
          sx={{
            color: "black",
            maxWidth: "90%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: "1.1rem",
            whiteSpace: "nowrap",
            textAlign: "left",
            paddingLeft: "1rem",
            paddingBottom: "1rem",
            position: "absolute",
            bottom: 70,
            left: 20,
          }}
        >
          25 Most Beautiful Places Around The World
        </Typography>
        <Divider />
        <ShareOutlined
          sx={{
            bottom: 15,
            right: 20,
            fontSize: "2rem",
            position: "absolute",
            color: "grey",
          }}
        />
      </Box>
    </Box>
  );
};

export default Cards;
