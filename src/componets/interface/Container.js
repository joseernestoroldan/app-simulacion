import React from 'react'
import { Box } from '@mui/material'

const Container = (props) => {
  return (
    <>
   
        <Box
          sx={{
            width: 250,
            height: 800,
            backgroundColor: "#6c3636",
            borderRadius: 3,
            borderColor: "red",
          }}
        >
            {props.children}
        </Box>

        
    
    </>
  )
}

export default Container