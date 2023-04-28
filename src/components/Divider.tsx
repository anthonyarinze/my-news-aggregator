import { Box } from "@mui/material";

type Props = {};

const Divider = (props: Props) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 70,
        left: 0,
        height: "0.21rem",
        width: "100%",
        backgroundColor: "#f0f3f6",
      }}
    />
  );
};

export default Divider;
