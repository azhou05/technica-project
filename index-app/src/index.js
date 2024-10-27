import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './user.css'; 
import Home from './Home';
import User from './UserPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <User />
  </React.StrictMode>
)