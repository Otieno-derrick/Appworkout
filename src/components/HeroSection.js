import React from 'react';
import { Box, Button, Stack, Typography} from '@mui/material';



const HeroSection = () => {
  return (
    <Box sx={{
      mt:{ lg: '212px', xs: '70px' }, ml : {sm : '50px'}
    }} positon='relative' p='20px'>
      <Typography color={'navy'} fontWeight= '500' fontSize={'30px'}>
        replace
      </Typography>
      <Typography fontWeight={700}
       sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px"
      >
        No pain, <br/> no gain
      </Typography>
      <Button href='#exercises' variant='contained' color='success'> More Exercises</Button>
    </Box>
  )
}

export default HeroSection