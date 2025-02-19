import React from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = ({ isOpen}) =>{
return(
    <div>
      

      <aside className="ml-[300px] my-[5%]">
              
              <ul className={`lg:flex flex-col md:flex-row md:gap-10 font-medium text-lg text-blue-400 bg-gray-300 lg:bg-transparent p-4 lg:h-auto h-[300px] md:p-0 md:w-[300px] md:h-dvh w-full  top-0 right-0 fixed lg:relative lg:w-full text-center md:text-start lg:pt-0 md:pt-10 md:pl-[50px] ${isOpen ? 'block top-[60px]' :'hidden top-0'}` }>

                <li className="hover:text-blue-700">
                  <a href="#">Trading</a>
                </li>

                <li className="hover:text-blue-700">
                  <a href="#">Investment</a>
                </li>

                <li className="hover:text-blue-700">
                  <a href="#">Pricing</a>
                </li>

                <li className="hover:text-blue-700">
                  <Link to="/contact">Contact Us</Link>
                </li>

                <li className="hover:text-blue-700">
                  <Link to="/about">About</Link>
                </li>
               
                <li className="hover:text-blue-700">
                  <Link to="/Services">Services</Link>
                </li>

                <Link to="/signUp" className="lg:hidden rounded-3xl ml-5 border-2 border-white font-semibold text-white">
                    <button  className="px-3 py-1">Sign Up</button>
                </Link>
                
              </ul>
            </aside>
    </div>
)

}
export default Navigation
