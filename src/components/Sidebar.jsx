import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaGlobe, FaCar, FaFileAlt, FaGift, FaCarAlt, FaExclamationTriangle, FaDollarSign, FaUsers } from 'react-icons/fa';
import { HiMenu, HiDocumentReport } from "react-icons/hi";
import { AiFillNotification } from "react-icons/ai";
import { IoSettingsSharp } from 'react-icons/io5';
import { MdOutlineAddBox } from 'react-icons/md';
import { RiUserSettingsFill } from "react-icons/ri";
import car from '../assets/car.png'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-white text-[#535f6b] p-5 transition-width duration-500 ${isCollapsed ? 'w-20' : 'w-60'}`}>
      <div className='flex items-center justify-between px-2 mb-4'>
        {!isCollapsed && <img src={car} alt="carlogo"  className=' w-10 h-10 rounded-full border-2 border-black p-1'/>  }
        <button onClick={toggleSidebar} className="mb-4 text-gray-500 hover:text-gray-800 pt-2">
          <HiMenu className='h-8 w-8'/>
        </button>
      </div>

      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
            <FaHome />
            {!isCollapsed && <span>Dashboard</span>}
          </Link>
        </li>
        <li>
          <Link to="/customer" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
            <FaUser />
            {!isCollapsed && <span>Rider</span>}
          </Link>
        </li>
        <li>
          <Link to="/region" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
            <FaGlobe />
            {!isCollapsed && <span>Region</span>}
          </Link>
        </li>
        <li>
          <Link to="/service" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
            <FaCar />
            {!isCollapsed && <span>Service</span>}
          </Link>
        </li>
        <li>
          <Link to="/driver" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
            <FaFileAlt />
            {!isCollapsed && <span>Driver</span>}
          </Link>
        </li>
        <li>
          <Link to="/document" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
            <FaFileAlt />
            {!isCollapsed && <span>Document</span>}
          </Link>
        </li>
        <li>
          <Link to="/coupon" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
            <FaGift />
            {!isCollapsed && <span>Coupon</span>}
          </Link>
        </li>
        <li>
          <Link to="/ride-request" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded relative">
            <FaCarAlt />
            {!isCollapsed && <span>Ride Request</span>}
            {!isCollapsed && (
              <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">56</span>
            )}
          </Link>
        </li>
        <li>
          <Link to="/complaint" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
            <FaExclamationTriangle />
            {!isCollapsed && <span>Complaint</span>}
          </Link>
        </li>
        <li>
          <Link to="/withdraw-request" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
            <FaDollarSign />
            {!isCollapsed && <span>Withdraw Request</span>}
          </Link>
        </li>
        <li>
          <Link to="/account-setting" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
            <RiUserSettingsFill />
            {!isCollapsed && <span>Account Setting</span>}
          </Link>
        </li>
        <li>
          <Link to="/additional-fees" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
            <MdOutlineAddBox />
            {!isCollapsed && <span>Additional Fees</span>}
          </Link>
        </li>
        <li>
          <Link to="/sos" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
            <FaUsers />
            {!isCollapsed && <span>SOS</span>}
          </Link>
        </li>
        <li>
          <Link to="/sos" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
            <AiFillNotification/>
            {!isCollapsed && <span>Push Notifications</span>}
          </Link>
        </li>
        <li>
          <Link to="/sos" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
            <HiDocumentReport />
            {!isCollapsed && <span>Report</span>}
          </Link>
        </li>
        <li>
          <Link to="/sos" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
            <IoSettingsSharp />
            {!isCollapsed && <span>Settings</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
