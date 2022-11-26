import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';

function App() {
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
