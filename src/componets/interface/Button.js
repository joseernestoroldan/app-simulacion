import React from "react";
import { Button } from "@mui/material";

const ButtonInt = (props) => {
  const {children, execute} = props

  return (
    <>
      <Button
        onClick={() => execute(true)}
        variant="outlined"
        sx={{
          color: "black",
          borderColor: "black",
          marginLeft: 1,
          backgroundColor: "#edc5c1",
          borderRadius: 1,
        }}
      >
       { children}
      </Button>
    </>
  );
};

export default ButtonInt;
