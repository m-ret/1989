import { About } from 'About/About';
import { Landing } from 'Landing/Landing';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};
