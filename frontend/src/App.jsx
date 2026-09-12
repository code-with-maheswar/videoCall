import React from 'react';
import LandingPage from './pages/Landing';
import Authentication from './pages/Authentication';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
