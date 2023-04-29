import {
  Box,
  Button,
  Grid,
  Typography,
  Divider as MaterialDivider,
} from "@mui/material";
import Cards from "../components/Cards";
import Divider from "../components/Divider";
import TrendingCards from "../components/TrendingCards";
import axios from "axios";
import { useEffect, useState } from "react";
import { NEWS_API_KEY } from "../config";

type Props = {};

const Latest = (props: Props) => {
  const drawerWidth = 320;
  let data: any = [];
  // const urlToImage = data.articles[1].urlToImage;

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${NEWS_API_KEY}`
      )
      .then((response) => {
        console.log(typeof response.data.articles[1].urlToImage);
        data = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box
      sx={{
        height: "150vh",
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
          width: "51.5vw",
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
              position: "relative",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              // backgroundImage: urlToImage,
              // backgroundSize: "cover",
              // backgroundPosition: "center",
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
            <Divider />
          </Box>
        </Button>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Cards />
          </Grid>
          <Grid item xs={6}>
            <Cards />
          </Grid>
          <Grid item xs={6}>
            <Cards />
          </Grid>
          <Grid item xs={6}>
            <Cards />
          </Grid>
        </Grid>
      </Box>

      {/* RIGHT SIDE */}
      <Box
        sx={{
          width: "45vw",
          height: "100vh",
          backgroundColor: "#f5f7f8",
        }}
      >
        <Box
          sx={{
            ml: "5rem",
            mt: "2.3rem",
            width: "23vw",
            height: "70vh",
            display: "flex",
            borderRadius: "4.5px",
            backgroundColor: "inherit",
            flexDirection: "column",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              position: "relative",
              left: 25,
              top: 10,
            }}
          >
            Trending News
          </Typography>
          <MaterialDivider sx={{ mt: "1.5rem" }} />
          <TrendingCards />
          <TrendingCards />
          <TrendingCards />
          <TrendingCards />
          <TrendingCards />
          <TrendingCards />
        </Box>
      </Box>
    </Box>
  );
};

export default Latest;
