import React, { useState } from "react";
import NewProcess from "./NewProcess";
import { Box, Button, Stack } from "@mui/material";
import { addCRUD } from "../crud/Crud";
import { Heading } from "../interface/Headings";

const Processes = () => {
  const [newProcess, setNewProcess] = useState(false); // toggle the new process tab

  const AddProcess = (process) => {
    const modelObject = {
      name: process.name,
      uspSeg: process.uspSeg,
    };
    addCRUD(modelObject, "processes");
    setNewProcess(false);
  };

  return (
    <div>
      <Stack direction="row" spacing={1}>
        <Box sx={{ width: 300, height: 200, backgroundColor: "primary.dark", borderRadius:3 }}>
        <Heading titulo = "Procesos:"/>

          <Button
            onClick={() => setNewProcess(true)}
            variant="outlined"
            sx={{ color: "black", borderColor: "black", marginLeft: 1 }}
          >
            Nuevo Proceso
          </Button>
        </Box>

        {newProcess && <NewProcess AddProcess={AddProcess} />}
      </Stack>
    </div>
  );
};

export default Processes;
