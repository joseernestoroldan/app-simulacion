import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

const StationProcesses = (props) => {
    const{station} = props
  return (
    <>

    {Object.keys(station.process).map((oneKey, i) => {
        return (
          <Box key={i}>
            <Stack direction="row" spacing={1}>
            <Typography sx={{fontFamily: 'Roboto', fontSize:16, fontWeight:'bold'}}>{station.process[oneKey].name}:</Typography>
            <Typography sx={{fontFamily: 'Roboto', fontSize:16, fontWeight: 'normal'}}>{station.process[oneKey].uspSeg}</Typography>
            </Stack>

          </Box>
        );
      })}
    </>
    
  )
}

export default StationProcesses