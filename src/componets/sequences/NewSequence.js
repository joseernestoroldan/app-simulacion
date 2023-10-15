import React, {useState, useEffect} from 'react'
import { Box, FormGroup, FormControl, TextField, Button } from '@mui/material'
import { onSnapshot, collection } from 'firebase/firestore'
import { db } from '../../init_firebase/firebase'

const NewSequence = (props) => {

  const [nameSequence, setNameSequence] = useState("")
  const{AddSequence} = props;

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("nueva secuencia")
    AddSequence(nameSequence)
  }

  useEffect(() => {
    const unSuscribed = onSnapshot(collection(db, "stations"), (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      //setStations(data);
    });
    return () => {
      unSuscribed();
    };
  }, []);

  return (
    <Box sx={{ width: 250, height: 150, backgroundColor: "#409197", borderRadius:3, padding: 1 }}>

<form onSubmit={handleSubmit}>
        <FormGroup name="nueva_secuencia">
          <FormControl sx={{ marginTop: 1 }}>
            <TextField
              label="Nombre de la Secuencia"
              name="nameSequence"
              type="string"
              onChange={(e) => setNameSequence(e.target.value)}
              value={nameSequence}
            />
          </FormControl>

          <Button type="submit" variant="outlined" sx={{ marginTop: 2, color: "black", borderColor: "black" }}>
            ADD
          </Button>
        </FormGroup>
      </form>
      
    </Box>
  )
}

export default NewSequence