import React from "react";
import { Typography } from "@mui/material";

export const Heading = (props) => {
  return (
    <>
      <Typography sx={{ margin: 1, fontSize: 26, fontWeight: 'bold' }}>
        {props.titulo}
      </Typography>
    </>
  );
};



export const SubHeadings = (props) => {
  return (
    <>
    <Typography sx={{ margin: 1, fontSize: 18, fontWeight: 600 }}>
      {props.titulo}
    </Typography>
  </>
  )
}




