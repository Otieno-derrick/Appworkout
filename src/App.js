import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Box} from '@mui/material';
import Home from "./pages/Home";
import ExerciseDetails from '../pages/ExersiceDetails';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
        <Box width="400px" sx={{ width: {xl:' 1448px'}}} m="auto">
            <Navbar />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/' element={<ExerciseDetails />} />
            </Routes>
            <Footer />
        </Box>

    </div>
  )
}

export default App
