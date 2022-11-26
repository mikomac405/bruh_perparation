import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import Login from './components/Login';
import useToken from './components/useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token){
    return <Login setToken={setToken}/>
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dash"/>}/>
        <Route path="/pref" element={<Preferences/>}/>
        <Route path="/dash" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
