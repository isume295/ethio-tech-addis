/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../components/about/About';
import Home from '../components/home/Home';

export default function Page() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myReservations" element={<About />} />
    </Routes>
  );
}
