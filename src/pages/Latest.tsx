import { Box, Button, Divider, Typography } from "@mui/material";
import Cards from "../components/Cards";

type Props = {};

const Latest = (props: Props) => {
  const drawerWidth = 320;
  return (
    <Box
      sx={{
        height: "100vh",
        ml: `${drawerWidth}px`,
        backgroundColor: "#f5f7f8",
        width: `calc(100% - ${drawerWidth}px)`,
        display: "flex",
        flexDirection: "row",
      }}
    >
      {/* LEFT SIDE */}
      <Box
        sx={{
          width: "55vw",
          height: "100vh",
          backgroundColor: "#f5f7f8",
        }}
      >
        <Button>
          <Box
            sx={{
              ml: "2.3rem",
              mt: "2rem",
              width: "50vw",
              height: "45vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              borderRadius: "4.5px",
              backgroundColor: "red",
              // backgroundImage: "url(image-url)",
              // backgroundSize: "cover",
              // backgroundPosition: "center",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                color: "white",
                whiteSpace: "nowrap",
                textAlign: "left",
                paddingLeft: "1rem",
                paddingBottom: "1rem",
                position: "absolute",
                bottom: 120,
                left: 20,
              }}
            >
              Travel
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                maxWidth: "80%",
                overflow: "hidden",
                textOverflow: "ellipsis",
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
            <Box
              sx={{
                borderTop: "1px solid white",
                position: "absolute",
                bottom: 70,
                left: 0,
                height: ".11rem",
                width: "100%",
                color: "blue",
                backgroundColor: "black",
              }}
            />
          </Box>
        </Button>
        <Cards />
      </Box>
      {/* RIGHT SIDE */}
      <Box
        sx={{
          width: "45vw",
          height: "100vh",
          backgroundColor: "#f5f7f8",
        }}
      ></Box>
    </Box>
  );
};

export default Latest;
