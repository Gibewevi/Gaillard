import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ServiceDetail from './components/features/ServiceDetail';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
