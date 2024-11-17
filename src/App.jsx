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
import Service from './pages/Service.jsx';
import CreateService from './pages/CreateService.jsx';

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
        <Route path="/service" element={<Service/>}/>
        <Route path="/service/create" element={<CreateService/>}/>
      </Routes>
    </Router>
  )
}

export default App
