import React from 'react';
import { Routes, Route } from "react-router-dom";
import Hero from '../UI/Hero';
import Testimonials from '../UI/Testimonials';
import Pricing from '../UI/SymptomsAndMedicine';
import Track from '../UI/Track';
import Exercise from '../UI/ExerciseInside';
import Home from '../UI/Home';
import Start from '../UI/Start'; // Ensure the correct import path for Start component
import LoginPage from '../UI/LoginPage';
import SignupPage from '../UI/SignupPage'; // Correct path for SignupPage
import Register from '../UI/Register'; // Import Register page
import PrivateRoute from './PrivateRoute'; // If PrivateRoute is being used
import AIassistance from '../UI/AIAssitance'; // Import AIassistance component

const AllRoutes = () => {
  return (
    <Routes>
      {/* Existing Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/programs" element={<Testimonials />} />
      <Route path="/membership" element={<Pricing />} />
      <Route path="/track" element={<Track />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* New Route for Register Page */}
      <Route path="/register" element={<Register />} />

      {/* Other Existing Routes */}
      <Route path="/start" element={<Start />} />
      <Route path="/exercise" element={<Exercise />} />

      {/* New Route for AI Assistance */}
      <Route path="/ai-assistance" element={<AIassistance />} />
    </Routes>
  );
};

export default AllRoutes;
