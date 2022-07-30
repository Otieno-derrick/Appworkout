import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Box} from '@mui/material';

const App = () => {
  return (
    <div>
        <Box width="400px">
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/' element={<ExerciseDetail />} />
            </Routes>
        </Box>

    </div>
  )
}

export default App
