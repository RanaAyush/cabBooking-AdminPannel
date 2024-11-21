import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import AddDriverForm from '../components/AddDriverForm'


const CreateDriver = () => {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <AddDriverForm/>
      </div>
    </div>
  )
}

export default CreateDriver