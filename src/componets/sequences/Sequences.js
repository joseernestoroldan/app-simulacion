import React, { useState, useEffect } from "react";
import {
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  Chip,
  Box,
  OutlinedInput,
  Button,
  TextField,
} from "@mui/material";
import Container from "../interface/Container";
import NewSequence from "./NewSequence";
import { addCRUD } from "../crud/Crud";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../init_firebase/firebase";
import ButtonInt from "../interface/Button";
import { MenuProps } from "./constants";
import { Heading, SubHeadings } from "../interface/Headings";

const Sequences = () => {
  const [newSequence, setNewSequence] = useState(false); //toggle
  const [sequences, setSequences] = useState([]); //almacena las secuencias existentes en la base de datos
  const [stations, setStations] = useState([]); //almacena las estaciones existentes en la base de datos
  const [sequence, setSequence] = useState("");
  const [stationArray, setStationArray] = useState([]); //almacena las estaciones seleccionadas para una nueva simulacion
  const [simulation, setSimulation] = useState([]); //almacena la simulacion

  const [turnoHoras, setTurnoHoras] = useState(0)
  const [turnoSeg, setTurnoSeg] = useState(0)
  const [segTrans, setSegTrans] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)
  const [ausentismo, setAusentismo] = useState(0)
  const [reproceso, setReproceso] = useState(0)
  const [paro, setParo] = useState(0)





  const AddSequence = (nameSequence) => {
    const modelObject = {
      name: nameSequence,
    };
    addCRUD(modelObject, "sequences");
    setNewSequence(false);
  };

  const AddSimulation = (sequence, objectOfObjects, turnoHoras, turnoSeg, segTrans, porcentaje, ausentismo, reproceso, paro) => {
    

    const modelObject = {
      name: sequence,
      simulacion: objectOfObjects,
      turnoHoras: turnoHoras,
      turnoSeg: turnoSeg,
      segTrans: segTrans,
      porcentaje: porcentaje,
      ausentismo: ausentismo,
      reproceso: reproceso,
      paro: paro,
    };
    addCRUD(modelObject, "simulations");
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setStationArray(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(simulation)

    const arreglo = [];
    let indice = 0;
    stationArray.map((item) => {
      stations.map((item_station) => {
        if (item === item_station.name) {
          indice++;
          item_station.id = indice;
          arreglo.push(item_station); //aqui deberia cambiar el id
        }
        return null;
      });
      return null;
    });
    console.log("este es mi arreglo:", arreglo);
    const objectOfObjects = {}; /////crear el objeto
    for (const object of arreglo) {
      objectOfObjects[object.name] = object;
    }
    console.log("object:", objectOfObjects);
    setSimulation(arreglo);
    AddSimulation(sequence, objectOfObjects, turnoHoras, turnoSeg, segTrans, porcentaje, ausentismo, reproceso, paro);
  };

  useEffect(() => {
    //consulta de secuencias disponibles
    const unSuscribed = onSnapshot(collection(db, "sequences"), (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });

      setSequences(data);
    });
    return () => {
      unSuscribed();
    };
  }, []);

  useEffect(() => {
    //consulta de estaciones disponibles
    const unSuscribedStation = onSnapshot(
      collection(db, "stations"),
      (snapshot) => {
        const data = [];
        snapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setStations(data);
      }
    );

    return () => {
      unSuscribedStation();
    };
  }, []);

  return (
    <>
      <Stack direction="row" spacing={1}>
        <Container>
          <Heading titulo="Secuencias:" />

          <ButtonInt execute={(x) => setNewSequence(x)}>
            NUEVA SECUENCIA
          </ButtonInt>

          <SubHeadings titulo="Configurar Simulacion:" />
 
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <FormControl sx={{ width: 230, margin: 1 }}>
                <InputLabel>Secuencias</InputLabel>
                <Select
                  value={sequence}
                  label="Sequence"
                  onChange={(e) => {
                    setSequence(e.target.value);
                  }}
                >
                  {sequences.map((sequence) => (
                    <MenuItem key={sequence.id} value={sequence.name}>
                      {sequence.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* ---------------------------------------------------------------------------- */}
              <FormControl sx={{ m: 1, width: 230 }}>
                <InputLabel>Estaciones</InputLabel>
                <Select
                  multiple
                  value={stationArray}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {stations.map((station) => (
                    <MenuItem key={station.id} value={station.name}>
                      {station.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ marginTop: 1 }}>
                <TextField
                  label="Turno Horas"
                  name="turnoHoras"
                  type="number"
                  onChange={(e) => setTurnoHoras(e.target.value)}
                  value={turnoHoras}
                />
              </FormControl>

              <FormControl sx={{ marginTop: 1 }}>
                <TextField
                  label="Turno Segundos"
                  name="turnoSegundos"
                  type="number"
                  onChange={(e) => setTurnoSeg(e.target.value)}
                  value={turnoSeg}
                />
              </FormControl>
              

              <FormControl sx={{ marginTop: 1 }}>
                <TextField
                  label="Segundos Transcurridos"
                  name="segTrans"
                  type="number"
                  onChange={(e) => setSegTrans(e.target.value)}
                  value={segTrans}
                />
              </FormControl>

              
              <FormControl sx={{ marginTop: 1 }}>
                <TextField
                  label="Porcentaje"
                  name="porcentaje"
                  type="number"
                  onChange={(e) => setPorcentaje(e.target.value)}
                  value={porcentaje}
                />
              </FormControl>

              <FormControl sx={{ marginTop: 1 }}>
                <TextField
                  label="Ausentismo"
                  name="ausentismo"
                  type="number"
                  onChange={(e) => setAusentismo(e.target.value)}
                  value={ausentismo}
                />
              </FormControl>

              <FormControl sx={{ marginTop: 1 }}>
                <TextField
                  label="Reproceso"
                  name="reproceso"
                  type="number"
                  onChange={(e) => setReproceso(e.target.value)}
                  value={reproceso}
                />
              </FormControl>

              <FormControl>
                <TextField 
                  label="Paro de Maquina"
                  name="paro"
                  type="number"
                  onChange={(e) => setParo(e.target.value)}
                  value={paro}
                />
              </FormControl>

              

  

              <Button type="submit">Send</Button>
            </FormGroup>
          </form>
        </Container>

        {newSequence && <NewSequence AddSequence={AddSequence} />}
      </Stack>
    </>
  );
};

export default Sequences;
