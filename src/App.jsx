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
import Driver from './pages/Driver.jsx';
import PendingDriver from './pages/PendingDriver.jsx';
import CreateDriver from './pages/CreateDriver.jsx';
import DriverDocs from './pages/DriverDocs.jsx';
import CreateDriverDocs from './pages/CreateDriverDocs.jsx';
import PushNotification from './pages/PushNotification.jsx';
import CreatePushNotification from './pages/CreatePushNotification.jsx';
import Complaint from './pages/Complaint.jsx';
import RideRequest from './pages/RideRequest.jsx';
import Terms from './pages/Terms.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Report from './pages/Report.jsx';
import DriverReport from './pages/DriverReport.jsx';
import ServiceWiseReport from './pages/ServiceWiseReport.jsx';
import Roles from './pages/Roles.jsx';
import Permissions from './pages/Permissions.jsx';
import Test from './components/test.jsx';
import { LoadScript } from '@react-google-maps/api'

const libraries = ["places", "drawing"];

function App() {

  return (
    <LoadScript
              googleMapsApiKey=""
              libraries={libraries}
            >
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
        <Route path="/driver" element={<Driver/>}/>
        <Route path="/driver/pending" element={<PendingDriver/>}/>
        <Route path="/driver/create" element={<CreateDriver/>}/>
        <Route path="/driver/docs" element={<DriverDocs/>}/>
        <Route path="/driver/docs/create" element={<CreateDriverDocs/>}/>
        <Route path="/pushnotification" element={<PushNotification/>}/>
        <Route path="/pushnotification/create" element={<CreatePushNotification/>}/>
        <Route path="/complaints/:status" element={<Complaint/>}/>
        <Route path="/riderequest/:status" element={<RideRequest/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/report/driver" element={<DriverReport/>}/>
        <Route path="/report/servicewise" element={<ServiceWiseReport/>}/>
        <Route path="/role" element={<Roles/>}/>
        <Route path="/permission" element={<Permissions/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </Router>
    </LoadScript>
  )
}

export default App
