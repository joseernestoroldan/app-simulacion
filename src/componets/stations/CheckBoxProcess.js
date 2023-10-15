import React, { useState } from "react";
import { FormControlLabel, Checkbox, FormGroup } from "@mui/material";

const CheckBoxProcess = (props) => {
  const [isChecked, setisChecked] = useState([]);
  const [newObject, setNewObject] = useState([]);
  const { processes, SendObject } = props;

  const handleCheck = (event) => {
    const { value } = event.target;
    let updatedList = [...isChecked];
    let updatedObject = [...newObject];

    if (event.target.checked) {
      updatedList = [...isChecked, event.target.value];
      const foundProcess = processes.find((item) => item.id === value);
      updatedObject = [...newObject, foundProcess];
    } else {
      updatedList.splice(isChecked.indexOf(event.target.value), 1);
      updatedObject.splice(newObject.indexOf(event.target.value), 1);
    }

    console.log("updated object:", updatedObject)

    const objectOfObjects = {};               /////crear el objeto
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
      {processes.map((process) => (
        <FormControlLabel
          key={process.id}
          control={
            <Checkbox
              name={process.name}
              onChange={handleCheck}
              value={process.id}
            />
          }
          label={`${process.name}: ${process.uspSeg}`}
        />
      ))}
    </FormGroup>
  );
};

export default CheckBoxProcess;
