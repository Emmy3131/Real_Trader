import { Link } from 'react-router-dom'
import { FaBars, } from "react-icons/fa6";
import { TiTimes } from "react-icons/ti";
import logo from "../assets/brandsImages/brand1.png"
import { useState } from 'react';


const Header = ({ onClose =() => {}}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <div className='bg-primary pt-2 px-3 w-ful0l z-1'>
            <nav className="flex md:flex-row justify-between items-center">
              <aside className="text-3xl font-semibold">
                <Link to="/">
                    <img  className="max-w-20" src={logo} alt=""/>
                </Link>
              </aside>

             

              <aside className="">
              

                <ul className="lg:flex flex-col md:flex-row md:gap-10 font-medium text-lg text-blue-400 bg-gray-300 md:bg-gray-300 lg:bg-transparent p-4 lg:h-auto h-[300px] md:p-0 md:w-[300px] md:h-dvh w-full  top-0 right-0 fixed lg:relative lg:w-full text-center md:text-start lg:pt-0 md:pt-10 md:pl-[50px] hidden " onClose={() => setIsOpen((prev) => !prev)}>

                <div className='ml-[200px] mb-[20px] text-[22px] text-black lg:hidden'>
                  <button onClick={() => onClose()}>
                    <TiTimes />
                  </button>
               </div>
                  

                  <li className="hover:text-white">
                    <a href="#">Trading</a>
                  </li>

                  <li className="hover:text-white">
                    <a href="#">Investment</a>
                  </li>

                  <li className="hover:text-white">
                    <a href="#">Pricing</a>
                  </li>

                  <li className="hover:text-white">
                    <Link to="/contact">Contact Us</Link>
                  </li>

                  <li className="hover:text-white">
                    <Link to="/about">About</Link>
                  </li>
                 
                  <li className="hover:text-white">
                    <Link to="/Services">Services</Link>
                  </li>
                  
                </ul>
              </aside>
          
              <aside className="hidden lg:flex">
                  <Link to="/Login" className="rounded-3xl ml-5 border-2 border-white font-semibold text-white">
                      <button className="px-3 py-1">Sign In</button>
                  </Link>
          
                  <Link to="/signUp" className="rounded-3xl ml-5 border-2 border-white font-semibold text-white">
                      <button  className="px-3 py-1">Sign Up</button>
                  </Link>
              </aside>

              <button onClick={() => setIsOpen((prev) => !prev)} className='lg:hidden'>
                <FaBars className='text-white text-[30px]' />
              </button>
            </nav>
        </div>
    </>
  )
}

export default Header