import React, { useState } from "react";

const AddServiceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    region: "",
    capacity: "",
    baseFare: "",
    minimumDistance: "",
    minimumFare: "",
    perDistance: "",
    perMinuteDrive: "",
    perMinuteWait: "",
    cancellationFee: "",
    adminCommission: "",
    waitingTimeLimit: "",
    commissionType: "Fixed",
    paymentMethod: "Cash",
    status: "Active",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="w-full py-8 px-4 bg-[#f7f9ff]">
      <form onSubmit={handleSubmit} className="my-4 mx-auto bg-white">
        <div className="px-4 border-b-2 border-blue-100 rounded">
          <h2 className="text-3xl py-4 font-semibold px-2">Add Service</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 bg-white p-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Region Field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Region <span className="text-red-500">*</span>
            </label>
            <select
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Region</option>
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="East">East</option>
              <option value="West">West</option>
            </select>
          </div>

          {/* Capacity Field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Capacity <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              placeholder="Capacity"
              className="w-full p-2 border rounded bg-[#f7f9ff]"
              required
            />
          </div>

          {/* Base Fare Field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Base Fare <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="baseFare"
              value={formData.baseFare}
              onChange={handleChange}
              placeholder="Base Fare"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Minimum Distance */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Minimum Distance <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="minimumDistance"
              value={formData.minimumDistance}
              onChange={handleChange}
              placeholder="Minimum Distance"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Minimum Fare */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Minimum Fare <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="minimumFare"
              value={formData.minimumFare}
              onChange={handleChange}
              placeholder="Minimum Fare"
              className="w-full p-2 border rounded bg-[#f7f9ff]"
              required
            />
          </div>

          {/* Per Distance */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Per Distance <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="perDistance"
              value={formData.perDistance}
              onChange={handleChange}
              placeholder="Per Distance"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Per Minute Drive */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Per Minute Drive <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="perMinuteDrive"
              value={formData.perMinuteDrive}
              onChange={handleChange}
              placeholder="Per Minute Drive"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Per Minute Wait */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Per Minute Wait <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="perMinuteWait"
              value={formData.perMinuteWait}
              onChange={handleChange}
              placeholder="Per Minute Wait"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Cancellation Fee */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Cancellation Fee <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="cancellationFee"
              value={formData.cancellationFee}
              onChange={handleChange}
              placeholder="Cancellation Fee"
              className="w-full p-2 border rounded bg-[#f7f9ff]"
              required
            />
          </div>

          {/* Admin Commission */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Admin Commission <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="adminCommission"
              value={formData.adminCommission}
              onChange={handleChange}
              placeholder="Admin Commission"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Waiting Time Limit */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Waiting Time Limit (in minutes){" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="waitingTimeLimit"
              value={formData.waitingTimeLimit}
              onChange={handleChange}
              placeholder="Waiting Time Limit"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Commission Type */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Commission Type
            </label>
            <select
              name="commissionType"
              value={formData.commissionType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="Fixed">Fixed</option>
              <option value="Percentage">Percentage</option>
            </select>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Payment Method
            </label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="Cash">Cash</option>
              <option value="Card">Wallet</option>
              <option value="cashnwallet">Cash & Wallet</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="w-full p-2 border rounded bg-[#f7f9ff]"
            />
          </div>

          {/* Description */}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full p-2 border rounded bg-[#f7f9ff]"
              rows="4"
            ></textarea>
          </div>
          
        </div>
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="relative right-5 bottom-5 bg-green-500 hover:bg-green-600 transition-colors text-white py-2 px-4 rounded"
            >
              Save
            </button>
          </div>

      </form>
    </div>
  );
};

export default AddServiceForm;