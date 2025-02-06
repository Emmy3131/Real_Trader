import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../pages/admin/Dashbord/AdminHeader';
import SideBar from '../pages/admin/Dashbord/SideBar';

const AuthenticatedLayout = () => {
  return (
    <div>
        <header className='bg-primary h-16 fixed w-full z-50'>
          <AdminHeader />
        </header>

        <div className='bg-primary h-screen fixed z-50 w-56 top-[65px]'>
          <SideBar />
        </div>

        <div>
          <div className='bg-slate-100 relative top-16 ml-56 '>
           <Outlet />
          </div>
        </div>
    </div>
  )
}

export default AuthenticatedLayout
