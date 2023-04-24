import { Box, Button, Typography } from "@mui/material";

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
            variant="h6"
            sx={{
              color: "white",
              maxWidth: "80%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            25 Most Beautiful Places Around The World
          </Typography>
        </Box>
      </Button>
    </Box>
  );
};

export default Latest;
