import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Navigation from "../components/Navigation";

const GuestLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>

        <div className="fixed w-full top-0">
             <Header toggleMenu={setIsOpen} isOpen={isOpen}/>
        </div>

        <div className={`fixed md:left-0 ${isOpen ? 'left-0' : '-left-52'} top-0 h-dvh z-50 text-white  transition-all duration-500`}>
          <Navigation isOpen={isOpen} />
        </div>

        <main className="bg-primary h-screen lg:mt-10 mt-10 overflow-clip">
          <Outlet/>
        </main>


        <div className=" bg-black text-center fixed w-full bottom-0 z-50">
            <Footer />
        </div>
      </div>
    
    </>
  )
}

export default GuestLayout