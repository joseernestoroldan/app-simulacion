import React, { useState, useEffect } from "react";
import NewStations from "./NewStations";
import Station from "./Station";
import { Stack } from "@mui/material";
import { db } from "../../init_firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { addCRUD, deleteCRUD } from "../crud/Crud";
import ButtonInt from "../interface/Button";
import Container from "../interface/Container";
import { Heading } from "../interface/Headings";
import BoxInset from "../interface/BoxInset";

const Stations = (props) => {
  const [newStation, setNewStation] = useState(false);
  const [stations, SetStations] = useState([]);

  const AddStation = async (name, distance, objectProcess) => {
    const modelObject = {
      name: name,
      distance: distance,
      process: objectProcess,
    };
    addCRUD(modelObject, "stations");
    setNewStation(false);
  };

  const deleteStation = async (id) => {
    deleteCRUD(id, "stations");
  };

  useEffect(() => {// peticion de estaciones
    const unSuscribed = onSnapshot(collection(db, "stations"), (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      SetStations(data);
    });
    return () => {
      unSuscribed();
    };
  }, []);

  return (
    <>
      <Stack direction="row" spacing={1}>
        <Container>
          <Heading titulo = "Estaciones:"/>
          <ButtonInt execute={(x) => setNewStation(x)}>Nueva Estacion</ButtonInt>

          <BoxInset>
            {stations.map((station) => (
              <Station key={station.id} station={station} deleteStation={deleteStation}></Station>
            ))}
          </BoxInset>
        </Container>
        {newStation && <NewStations AddStation={AddStation} />}
      </Stack>
    </>
  );
};

export default Stations;
