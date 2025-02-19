import { Link } from 'react-router-dom'
import { FaBars, FaSquareMinus, } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/brandsImages/brand1.png"
import { useState } from 'react';


const Header = ({toggleMenu, isOpen}) => {
  return (
    <>
        <div className='bg-red-600 pt-2 px-3 w-full z-50'>
            <nav className="flex md:flex-row justify-between items-center">
              <aside className="text-3xl font-semibold">
                <Link to="/">
                    <img  className="max-w-20" src={logo} alt=""/>
                </Link>
              </aside>

              <aside>
                
              </aside>

              <aside className="hidden lg:flex">
                  <Link to="/Login" className="rounded-3xl ml-5 border-2 border-white font-semibold text-white">
                      <button className="px-3 py-1">Sign In</button>
                  </Link>
          
                  <Link to="/signUp" className="rounded-3xl ml-5 border-2 border-white font-semibold text-white">
                      <button  className="px-3 py-1">Sign Up</button>
                  </Link>
              </aside>

              <div className='ml-[200px] mb-[20px] text-[22px] text-black lg:hidden'>
                <button onClick={() => toggleMenu(prev => !prev)}>
                  {isOpen ?  <IoMdClose /> :  <FaBars />}
                </button>
              </div>
            </nav>
        </div>
    </>
  )
}

export default Header