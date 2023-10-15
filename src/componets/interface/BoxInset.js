import React from "react";
import { Box } from "@mui/material";

const BoxInset = (props) => {
  return (
    <Box
      sx={{
        padding: 1,
        borderColor: "black",
        margin: 1,
        borderWidth: 1,
        borderStyle: "inset",
      }}
    >
      {props.children}
    </Box>
  );
};

export default BoxInset;
