import React, { useState } from "react";

const AddCouponForm = () => {
  const [formData, setFormData] = useState({
    code: "",
    title: "",
    couponType: "All",
    usageLimit: "",
    startDate: "",
    endDate: "",
    discountType: "Fixed",
    discount: "",
    maxDiscount: "",
    minimumAmount: "",
    status: "Active",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your API call or form submission logic here
  };

  return (
    <div className="py-8 px-4 bg-[#f7f9ff]">
    <form onSubmit={handleSubmit} className="bg-white rounded shadow-sm space-y-4">
        <div className="px-4 border-b-2 border-blue-100 bg-white">
            <h2 className="text-3xl py-4 font-semibold px-2">Add Coupon</h2>
        </div>
      <div className="grid grid-cols-3 gap-6 p-6">
        {/* Code */}
        <div className="flex flex-col">
          <label className="font-medium">
            Code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="Code"
            className="border border-gray-300 rounded p-2"
            required
          />
        </div>

        {/* Title */}
        <div className="flex flex-col">
          <label className="font-medium">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="border border-gray-300 rounded p-2"
            required
          />
        </div>

        {/* Coupon Type */}
        <div className="flex flex-col">
          <label className="font-medium">
            Coupon Type <span className="text-red-500">*</span>
          </label>
          <select
            name="couponType"
            value={formData.couponType}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          >
            <option value="All">All</option>
            <option value="Fast">Fast Ride</option>
            <option value="Region">Region wise</option>
            <option value="Service">Service wise</option>
          </select>
        </div>

        {/* Usage Limit */}
        <div className="flex flex-col">
          <label className="font-medium">Usage Limit per Rider</label>
          <input
            type="number"
            name="usageLimit"
            value={formData.usageLimit}
            onChange={handleChange}
            placeholder="Usage limit per Rider"
            className="border border-gray-300 rounded p-2"
          />
        </div>

        {/* Start Date */}
        <div className="flex flex-col">
          <label className="font-medium">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>

        {/* End Date */}
        <div className="flex flex-col">
          <label className="font-medium">End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>

        {/* Discount Type */}
        <div className="flex flex-col">
          <label className="font-medium">Discount Type</label>
          <select
            name="discountType"
            value={formData.discountType}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          >
            <option value="Fixed">Fixed</option>
            <option value="Percentage">Percentage</option>
          </select>
        </div>

        {/* Discount */}
        <div className="flex flex-col">
          <label className="font-medium">
            Discount <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            placeholder="Discount"
            className="border border-gray-300 rounded p-2"
            required
          />
        </div>

        {/* Maximum Discount */}
        <div className="flex flex-col">
          <label className="font-medium">
            Maximum Discount <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="maxDiscount"
            value={formData.maxDiscount}
            onChange={handleChange}
            placeholder="Maximum Discount"
            className="border border-gray-300 rounded p-2"
            required
          />
        </div>

        {/* Minimum Amount */}
        <div className="flex flex-col">
          <label className="font-medium">
            Minimum Amount <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="minimumAmount"
            value={formData.minimumAmount}
            onChange={handleChange}
            placeholder="Minimum Amount"
            className="border border-gray-300 rounded p-2"
            required
          />
        </div>

        {/* Status */}
        <div className="flex flex-col">
          <label className="font-medium">
            Status <span className="text-red-500">*</span>
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            rows="3"
            className="border border-gray-300 rounded p-2"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-green-500 text-white px-6 py-2 relative left-5 bottom-5 rounded hover:bg-green-600 transition-colors"
      >
        Save
      </button>
    </form>
    </div>
  );
};

export default AddCouponForm;
