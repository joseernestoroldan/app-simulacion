import React, { useState } from "react";
import { FormControlLabel, Checkbox, FormGroup } from "@mui/material";

const CheckBoxStations= (props) => {
  const [isChecked, setisChecked] = useState([]);
  const [newObject, setNewObject] = useState([]);
  const { stations, SendObject } = props;

  const handleCheck = (event) => {
    const { value } = event.target;
    let updatedList = [...isChecked];
    let updatedObject = [...newObject];

    if (event.target.checked) {
      updatedList = [...isChecked, event.target.value];
      const foundStation = stations.find((item) => item.id === value);
      updatedObject = [...newObject, foundStation];
    } else {
      updatedList.splice(isChecked.indexOf(event.target.value), 1);
      updatedObject.splice(newObject.indexOf(event.target.value), 1);
    }

    console.log("updated object:", updatedObject)

    const objectOfObjects = {};
    for (const object of updatedObject) {
      objectOfObjects[object.name] = object;
    }
    console.log("object:", objectOfObjects)

    SendObject(objectOfObjects);

    setisChecked(updatedList);
    setNewObject(updatedObject);
  };

  return (
    <FormGroup>
      {stations.map((station) => (
        <FormControlLabel
          key={station.id}
          control={
            <Checkbox
              name={station.name}
              onChange={handleCheck}
              value={station.id}
            />
          }
          label={`${station.name}`}
        />
      ))}
    </FormGroup>
  );
};

export default CheckBoxStations;
