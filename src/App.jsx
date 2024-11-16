import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx'
import DashBoard from './pages/DashBoard.jsx';
import Customer from './pages/Customer.jsx'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/customer" element={<Customer/>}/>
      </Routes>
    </Router>
  )
}

export default App
