import React, { useState } from "react";
import ReactQuill from "react-quill";
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const PrivacyPolicy = () => {
    const [content, setContent] = useState("");

    const handleSave = () => {
        // console.log("Saved Content:", content);
        alert("Terms and Conditions saved successfully!");
    };
    return (
        <div className="flex overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <div className="p-6 bg-[#f7f9ff]">
                    <div className="flex flex-col gap-2">
                        <div className="px-4 border-b-2 border-blue-100 bg-white">
                            <h2 className="text-3xl py-4 font-semibold px-2">Privacy Policy </h2>
                        </div>
                        <div>
                            <div className="h-[300px] overflow-hidden mb-2">
                                <ReactQuill
                                    value={content}
                                    onChange={setContent}
                                    modules={{
                                        toolbar: [
                                            [{ header: [1, 2, 3, false] }],
                                            ["bold", "italic", "underline"],
                                            [{ list: "ordered" }, { list: "bullet" }],
                                            ["link"],
                                            ["clean"],
                                        ],
                                    }}
                                    className="h-[300px] bg-white"
                                    placeholder="Write your terms and conditions here..."
                                />
                            </div>
                            <button
                                onClick={handleSave}
                                className="bg-[#007BFF] text-white rounded cursor-pointer p-3 "
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PrivacyPolicy