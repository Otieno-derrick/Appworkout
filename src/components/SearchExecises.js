import React, {useState, useEffect} from 'react' ;
import {Box, Button, Stack, TextField, Typography} from "@mui/material";





const Searchexecises = () => {
  return (
    <Stack alignItems={'center'} mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Try it yourself:
       </Typography>
       <Box position={'relative'} mb="72px">
        <TextField 
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '600px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
        value={''}
        type={'text'}
        onChange={(e) =>{} }
        placeholder="Exercises"
        height="76px"
        />

       </Box>
    </Stack>
  )
}

export default Searchexecises