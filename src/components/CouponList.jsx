import React, { useState, useEffect } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const CouponList = () => {
    // Sample data
    const data = [
        { id: 1, code: 'HELLONEW', title: '10% discound for New users', startDate: '2024-11-15', endDate: '2024-11-15', status: 'Active' },
        { id: 2, code: 'HELLONEW', title: '10% discound for New users', startDate: '2024-11-15', endDate: '2024-11-15', status: 'Active' },
        { id: 3, code: 'HELLONEW', title: '10% discound for New users', startDate: '2024-11-15', endDate: '2024-11-15', status: 'Active' },
        { id: 4, code: 'HELLONEW', title: '10% discound for New users', startDate: '2024-11-15', endDate: '2024-11-15', status: 'Active' },
        { id: 5, code: 'HELLONEW', title: '10% discound for New users', startDate: '2024-11-15', endDate: '2024-11-15', status: 'Active' },
        { id: 6, code: 'HELLONEW', title: '10% discound for New users', startDate: '2024-11-15', endDate: '2024-11-15', status: 'Active' },
        { id: 7, code: 'HELLONEW', title: '10% discound for New users', startDate: '2024-11-15', endDate: '2024-11-15', status: 'Active' },
        { id: 8, code: 'HELLONEW', title: '10% discound for New users', startDate: '2024-11-15', endDate: '2024-11-15', status: 'Active' },
        { id: 9, code: 'HELLONEW', title: '10% discound for New users', startDate: '2024-11-15', endDate: '2024-11-15', status: 'Active' },
        { id: 10, code: 'HELLONEW', title: '10% discound for New users', startDate: '2024-11-15', endDate: '2024-11-15', status: 'Active' },
        { id: 11, code: 'HELLONEW', title: '10% discound for New users', startDate: '2024-11-15', endDate: '2024-11-15', status: 'Active' },
        { id: 12, code: 'HELLONEW', title: '10% discound for New users', startDate: '2024-11-15', endDate: '2024-11-15', status: 'Active' },
        { id: 13, code: 'HELLONEW', title: '10% discound for New users', startDate: '2024-11-15', endDate: '2024-11-15', status: 'Active' },

    ];

    const [users, setUsers] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [displayedUsers, setDisplayedUsers] = useState([]);

    useEffect(() => {
        const startIdx = (currentPage - 1) * entriesPerPage;
        const endIdx = startIdx + entriesPerPage;
        setDisplayedUsers(users.slice(startIdx, endIdx));
    }, [users, currentPage, entriesPerPage]);

    const totalPages = Math.ceil(users.length / entriesPerPage);

    const handleEntriesChange = (e) => {
        setEntriesPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to the first page
    };

    const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum);
    };

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="p-4 bg-[#f7f9ff]">
            <div className="flex justify-between px-4 border-b-2 border-blue-100 bg-white">
                <h2 className="text-3xl py-4 font-semibold px-2">Coupons List</h2>
                <Link to='/coupon/create' className="border border-black bg-white text-xl text-black hover:bg-black hover:text-white rounded-md my-3 flex items-center p-2"> + Add</Link>
            </div>
            <div className='bg-white py-4 px-2'>
                <div className="flex items-center mb-4">
                    <label className="mr-2">Show</label>
                    <select
                        value={entriesPerPage}
                        onChange={handleEntriesChange}
                        className="border p-2 rounded"
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>50</option>
                        <option value={20}>100</option>
                    </select>
                    <label className="ml-2">entries</label>
                </div>

                <table className="w-full border-collapse border border-blue-200">
                    <thead>
                        <tr className="">
                            <th className="py-4 px-2 border-b-2 border-blue-200">No</th>
                            <th className="py-4 px-2 border-b-2 border-blue-200">Code</th>
                            <th className="py-4 px-2 border-b-2 border-blue-200">Title</th>
                            <th className="py-4 px-2 border-b-2 border-blue-200">Start Date</th>
                            <th className="py-4 px-2 border-b-2 border-blue-200">End Date</th>
                            <th className="py-4 px-2 border-b-2 border-blue-200">Status</th>
                            <th className="py-4 px-2 border-b-2 border-blue-200">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedUsers.map((coupon, index) => (
                            <tr key={coupon.id} className="hover:bg-gray-50">
                                <td className="p-2 border-b-2 border-blue-200">{(currentPage - 1) * entriesPerPage + index + 1}</td>
                                <td className="p-2 border-b-2 border-blue-200">{coupon.code}</td>
                                <td className="p-2 border-b-2 border-blue-200 text-center">{coupon.title}</td>
                                <td className="p-2 border-b-2 border-blue-200">{coupon.startDate}</td>
                                <td className="p-2 border-b-2 border-blue-200">{coupon.endDate}</td>
                                <td className="p-2 border-b-2 border-blue-200">
                                    <span className="bg-blue-500 text-white px-2 py-1 rounded">{coupon.status}</span>
                                </td>
                                <td className="p-2 border-b-2 border-blue-200">
                                    <button className="text-blue-600 mx-1 text-xl"><FaRegEdit /></button>
                                    <button className="text-blue-600 mx-1">👁️</button>
                                    <button className="text-red-600 mx-1 text-xl"><MdDelete /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='flex items-center justify-between p-4'>
                    <div>
                        <p>Showing 10 of 15 entries</p>
                    </div>

                    <div className="flex justify-center items-center gap-2 mt-4">
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
                        >
                            Previous
                        </button>
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CouponList;
