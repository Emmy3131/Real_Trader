import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsappSquare } from "react-icons/fa";
import { } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center text-white py-[50px] gap-10"> 
        <aside>
          <FaFacebook />
        </aside>

        <aside>
          <FaLinkedin />
        </aside>

        <aside>
          <FaInstagram />
        </aside>

        <aside>
          <FaWhatsappSquare/>
        </aside>
      </div>
    
    </>
  )
}

export default Footer