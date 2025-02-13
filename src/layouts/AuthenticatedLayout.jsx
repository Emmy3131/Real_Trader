import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../pages/admin/Dashbord/AdminHeader';
import SideBar from '../pages/admin/Dashbord/SideBar';
import { useState } from 'react';
import { FaBars, } from "react-icons/fa6";

const AuthenticatedLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <header className='bg-primary h-16 fixed w-full z-50 flex gap-3'>
          <AdminHeader />

          <button onClick={() => setIsOpen((prev) => !prev)} className="py-1 px-2 bg-primary text-white md:hidden">
            <FaBars className='text-[29px]'/>
          </button>
        </header>

        <div className={`fixed md:left-0 ${isOpen ? 'left-0' : '-left-58'} top-[65px] h-dvh w-56 bg-primary text-white z-50 transition-all duration-500`}>
            <SideBar onClose={() => setIsOpen((prev) => !prev)} />
        </div>

          <div className='bg-slate-100 relative top-[67px] lg:top-16 md:ml-56 lg:w-6xl w-screen overflow-x-hidden'>
           <Outlet />
          </div>
    </div>
  )
}

export default AuthenticatedLayout
