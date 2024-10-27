import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import UserPage from './UserPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
