import React, { useState } from "react";

const AddPushNotificationForm = () => {
    const [form, setForm] = useState({
        rider: "",
        driver: "",
        title: "",
        message: "",
        image: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e) => {
        setForm({ ...form, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", form);
    };

    return (
        <div className="bg-[#f7f9ff] p-6 pb-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-6">Add Push Notification</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Rider & Driver Selection */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Rider <span className="text-red-500">*</span>
                            </label>
                            <input 
                            required
                                spellCheck='false'
                                type="search"
                                name="rider"
                                placeholder="Select Rider"
                                value={form.rider}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-400"
                            />
                            <label className="flex items-center mt-2">
                                <input type="checkbox" className="mr-2 w-4 h-4 rounded" /> Select All
                            </label>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Driver <span className="text-red-500">*</span>
                            </label>
                            <input
                            required
                                spellCheck='false'
                                type="search"
                                name="driver"
                                placeholder="Select Driver"
                                value={form.driver}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-400"
                            />
                            <label className="flex items-center mt-2">
                                <input type="checkbox" className="mr-4 w-4 h-4 rounded" /> Select All
                            </label>
                        </div>
                    </div>

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Title <span className="text-red-500">*</span>
                        </label>
                        <input
                        required
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={form.title}
                            onChange={handleInputChange}
                            className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-400"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                        required
                            name="message"
                            placeholder="Message"
                            value={form.message}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 h-24 outline-none focus:border-blue-400"
                        />
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Image</label>
                        <div className="flex items-center">
                            <input
                            required
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="flex w-1/3  border border-gray-300 rounde cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Save Button */}
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddPushNotificationForm;
