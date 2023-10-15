import "./App.css";
import Stations from "./componets/stations/Stations";
import Processes from "./componets/processes/Processes";
import Sequences from "./componets/sequences/Sequences";
import { Container, Stack } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg" sx={{ backgroundColor: "#ffe5dd" }}>
        <Stack direction="row" spacing={10}>
          <Stack direction="column" spacing={2}>
            <Stations></Stations>
            <Processes></Processes>
          </Stack>
          <Sequences/>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
