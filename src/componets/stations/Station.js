import React from "react";
import StationProcesses from "./StationProcesses";
import { Box, Typography, Stack, Button } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Station = (props) => {
  return (
    <Box
      
      sx={{
        width: 150,
        height: 100,
        backgroundColor: "#edc5c1",
        border: "black",
        marginTop: 1,
        padding: 2,
        borderRadius: 3,
      }}
    >
      <Stack direction="row" justifyContent="space-between"> 
        <Typography sx={{ fontSize: 22, fontWeight: "bold", fontFamily: "Roboto" }}>
          {props.station.name}
        </Typography>
       

        <Button onClick={() => props.deleteStation(props.station.id, props.table)}><DeleteOutlineIcon ></DeleteOutlineIcon></Button>
      </Stack>
      <Typography sx={{ fontSize: 16, fontWeight: 600, fontFamily: "Roboto" }}>
         Distancia: {props.station.distance}
      </Typography>
      <StationProcesses station={props.station}></StationProcesses>
    </Box>
  );
};

export default Station;
