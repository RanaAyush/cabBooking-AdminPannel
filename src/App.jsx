import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx'
import DashBoard from './pages/DashBoard.jsx';
import Customer from './pages/Customer.jsx'
import Coupon from './pages/Coupon.jsx';
import CreateCoupon from './pages/CreateCoupon.jsx';
import './App.css'
import CreateRegion from './pages/CreateRegion.jsx';
import Region from './pages/Region.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/customer" element={<Customer/>}/>
        <Route path="/coupon" element={<Coupon/>}/>
        <Route path="/coupon/create" element={<CreateCoupon/>}/>
        <Route path="/region" element={<Region/>}/>
        <Route path="/region/create" element={<CreateRegion/>}/>
      </Routes>
    </Router>
  )
}

export default App
