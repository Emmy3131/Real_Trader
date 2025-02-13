import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

const GuestLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>

        <div>
          <Header onClose={()=>setIsOpen((prev)=> !prev)}/>
        </div>

        <main className="">
          <Outlet/>
        </main>


        <Footer/>
      </div>
    
    </>
  )
}

export default GuestLayout