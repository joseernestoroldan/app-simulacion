import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  FormGroup,
  TextField,
  Button,
  FormLabel,
} from "@mui/material";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../init_firebase/firebase";
import CheckBoxProcess from "./CheckBoxProcess";

const NewStations = (props) => {
  const [name, setName] = useState("");
  const [distance, setDistance] = useState(0)
  const [objectProcess, setObjectProcess] = useState({});
  const [processes, setProcesses] = useState([]);

  const { AddStation } = props;

  const SendObject = (object) => {
    setObjectProcess(object);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddStation(name, distance, objectProcess);
  };

  useEffect(() => {
    const unSuscribed = onSnapshot(collection(db, "processes"), (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setProcesses(data);
    });
    return () => {
      unSuscribed();
    };
  }, []);

  return (
    <Box sx={{ width: 250, height: 582, backgroundColor: "#409197", borderRadius:3, padding: 1 }}>
      <form onSubmit={handleSubmit}>
        <FormGroup name="nueva_estacion">
          <FormControl sx={{ marginTop: 1 }}>
            <TextField
              label="Nombre de la Estacion"
              name="name"
              type="string"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </FormControl>

          <FormControl sx={{ marginTop: 1 }}>
            <TextField
              label="Distancia"
              name="distancia"
              type="number"
              onChange={(e) => setDistance(e.target.value)}
              value={distance}
            />
          </FormControl>
          

          {/* -------------------------------------------------------------------- */}
          <Box sx={{ display: "flex" }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend">Procesos Disponibles</FormLabel>
              <CheckBoxProcess
                SendObject={SendObject}
                processes={processes}
              ></CheckBoxProcess>
            </FormControl>
          </Box>
          {/* --------------------------------------------------------------------- */}
          <Button type="submit" variant="outlined" sx={{ marginTop: 2, color: "black", borderColor: "black" }}>
            ADD
          </Button>
        </FormGroup>
      </form>
    </Box>
  );
};

export default NewStations;
