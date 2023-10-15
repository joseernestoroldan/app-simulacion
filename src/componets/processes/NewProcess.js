import React, { useState } from "react";
import { Box, FormControl, FormGroup, TextField, Button } from "@mui/material";

const NewProcess = (props) => {
 const initialParams = {
    name: "",
    uspSeg: 0,
  };

  const [process, setProcess] = useState(initialParams);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProcess({ ...process, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.AddProcess(process);
  };

  return (
    <Box sx={{width: 300, height: 200, backgroundColor: "lightgreen", padding:1, borderRadius: 3}}>

      <form onSubmit={handleSubmit}>
        <FormGroup name="new_process">

          <FormControl sx={{ marginTop: 1 }}>
            <TextField
              label="Nombre del Proceso"
              name="name"
              type="string"
              onChange={handleInputChange}
              value={process.name}
            />
          </FormControl>

          <FormControl sx={{ marginTop: 1 }}>
            <TextField
              label="Duracion"
              name="uspSeg"
              type="number"
              onChange={handleInputChange}
              value={process.uspSegSeg}
            />
          </FormControl>

          <Button type="submit" variant="outlined" sx={{ marginTop: 2 }}>
            ADD
          </Button>
        </FormGroup>
      </form>
    </Box>
  );
};

export default NewProcess;
