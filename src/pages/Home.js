import React,{useState} from 'react'; 
import {Box} from '@mui/material';
import HeroSection from '../components/HeroSection';
import SearchExecises from '../components/SearchExecises';
import Exercises from '../components/Exercises';
import Login from '../components/Login';



const Home = () => {
  return (
    <Box>
      <HeroSection />
      <SearchExecises />
      <Exercises />
      <Login />
    </Box>
  )
}

export default Home