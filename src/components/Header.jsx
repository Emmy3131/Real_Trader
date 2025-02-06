import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import logo from "../assets/brandsImages/brand1.png"
const Header = () => {
    // let menuBar = document.getElementById ('menuIcon');

    // menuBar.addEventListener ('click', () => {
    //   let listItem = document.getElementById('menuListItem');

      
    // })

  return (
    <>
        <div className='bg-primary pt-2 px-3 fixed w-full z-10'>
            <nav className="flex md:flex-row justify-between items-center">
              <aside className="text-3xl font-semibold">
                <Link to="/">
                    <img  className="max-w-20" src={logo} alt=""/>
                </Link>
              </aside>
          
              <aside className="">
                <ul className="lg:flex flex-col md:flex-row md:gap-10 font-medium text-lg text-blue-200 bg-stone-700 md:bg-transparent p-4 rounded-lg md:p-0 hidden md:block" id="menuListItem">
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

              <aside className="lg:hidden text-3xl text-white" id='menuIcon'>
              <FaBars />
              </aside>
          
          
              <aside className="hidden lg:flex">
                  <Link to="/Login" className="rounded-3xl ml-5 border-2 border-white font-semibold text-white">
                      <button className="px-3 py-1">Sign In</button>
                  </Link>
          
                  <Link to="/signUp" className="rounded-3xl ml-5 border-2 border-white font-semibold text-white">
                      <button  className="px-3 py-1">Sign Up</button>
                  </Link>
              </aside>
            </nav>
        </div>
    </>
  )
}

export default Header