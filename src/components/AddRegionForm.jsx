import React, { useState } from "react";
import {LoadScript } from "@react-google-maps/api";
import MapComponent from "./MapComponent";

const libraries = ["drawing"];

const AddRegionForm = () => {
  const [formData, setFormData] = useState({
    city: '',
    distanceUnit: 'km',
    timezone: 'GMT + 5:30',
    Status: 'Active',
  });
  const [polygonCoordinates, setPolygonCoordinates] = useState([]);

  const handlePolygonComplete = (coordinates) => {
    console.log("Received coordinates from MapComponent:", coordinates);
    setPolygonCoordinates(coordinates);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData,polygonCoordinates);
    // Add your API call or form submission logic here
  };

  return (
    <div className="py-8 px-4 bg-[#f7f9ff]">
      <form onSubmit={handleSubmit} className="bg-white rounded shadow-sm space-y-4">
        <div className="px-4 border-b-2 border-blue-100 bg-white">
          <h2 className="text-3xl py-4 font-semibold px-2">Add Region</h2>
        </div>
        <div className="grid grid-cols-3 gap-6 p-6">

          <div className="flex flex-col">
            <label className="font-medium">
              City Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City name"
              className="border border-gray-300 rounded p-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">
              Distance Unit <span className="text-red-500">*</span>
            </label>
            <select
              name="distanceUnit"
              value={formData.distanceUnit}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2"
            >
              <option value="km">km</option>
              <option value="mile">mile</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Timezone</label>
            <select
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2"
            >
              <option value="Fixed"> GMT + 5:30 </option>
            </select>
          </div>

          {/* Status */}
          <div className="flex flex-col">
            <label className="font-medium">
              Status <span className="text-red-500">*</span>
            </label>
            <select
              name="Status"
              value={formData.Status}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Map */}
        
        <div className="flex justify-between">
          <div className="w-1/3 relative p-6">
            <img src="https://apps.meetmighty.com/mighty-taxi/images/region.gif" alt="" />
            <p className="mt-1 p-2 text-gray-500"> Drag the map to find the correct area</p>
            <p className="mt-3 p-2 text-gray-500">You may begin placing pins on the map and connect them to create area, required minimum 3 points</p>
          </div>

          <div className="w-2/3 relative">
            <label className="font-medium">Select Region on Map</label>
            <LoadScript
              googleMapsApiKey=""
              libraries={libraries}
            >
              <MapComponent onPolygonComplete ={handlePolygonComplete} />

            </LoadScript>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 relative left-5 bottom-5 rounded hover:bg-green-600 transition-colors"
          >
            Save
          </button>

        </div>
      </form>
    </div>
  );
};

export default AddRegionForm;
