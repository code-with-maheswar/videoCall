import React from 'react';
import LandingPage from './pages/Landing';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
