import { MdDashboard } from "react-icons/md";
import { MdAccountBalance } from "react-icons/md";
import { SiTradingview } from "react-icons/si";
import { GrTransaction } from "react-icons/gr";
import { AiTwotoneProfile } from "react-icons/ai";
import { MdOutlineCastForEducation } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { clearAuth } from "../../auth/js/AuthService";
import { FaBars, } from "react-icons/fa6";


const SideBar = ({ onClose = () => {}}) => {
    const Logout =() => {
        clearAuth();
    }
  return (
    <>
      <div className="flex flex-col">
            <div className="w-full">
                  <button onClick={() => onClose()}  className="py-1 px-2 bg-primary text-white lg:hidden w-full cursor-pointer">
                        <FaBars className="text-left ml-[190px]" />
                  </button>
            </div>
           
            <aside className="flex-col grow py-2 px-4 text-white overflow-auto rounded-l-2xl">
                <ul>
                    <li>
                        <Link to="/Dashbord" id="mnu_dashboard" className="py-2 px-3 flex items-center gap-2">
                            <MdDashboard className="" /> 
                            <span>
                                Dashboard
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Accounts" id="mnu_dashboard" className="py-2 px-3 flex items-center gap-2">
                            <MdAccountBalance className="" /> 
                            <span className="flex-1">
                                Accounts
                            </span>
                        </Link>
                    </li>
                    <li>
                      <a href="#" id="mnu_dashboard" className="py-2 px-3 flex items-center gap-2">
                          <MdAccountBalance /> 
                          <span className="flex-1">
                              Funded Accounts
                          </span>
                          <i className="fas fa-chevron-down"></i>
                      </a>
                  </li>
                  <li>
                    <a href="#" id="mnu_dashboard" className="py-2 px-3 flex items-center gap-2">
                        <SiTradingview /> 
                        <span className="flex-1">
                            Copy Trading
                        </span>
                        <i className="fas fa-chevron-down"></i>
                    </a>
                  </li>

                    <li>
                      <a href="#" id="mnu_dashboard" className="py-2 px-3 flex items-center gap-2">
                          <GrTransaction /> 
                          <span className="flex-1">
                              Transactions
                          </span>
                          <i className="fas fa-chevron-down"></i>
                      </a>
                    </li>
                      
                    <hr className="max-w-80 max-h-60 bg-blue-600 my-5" />

                        <li>
                          <a href="" id="mnu_dashboard" className="py-2 px-3 flex items-center gap-2">
                              <MdOutlineCastForEducation /> 
                              <span>
                                  Learn How To Trade
                              </span>
                          </a>
                      </li>
                    <li>
                        <a href="" id="mnu_dashboard" className="py-2 px-3 flex items-center gap-2">
                            <AiTwotoneProfile />
                            <span>
                                My Profile
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="" id="mnu_dashboard" className="py-2 px-3 flex items-center gap-2">
                            <IoIosSettings /> 
                            <span>
                                Settings
                            </span>
                        </a>
                    </li>
                </ul>

              
            </aside>
  


        <aside className="px-4 py-3">
            <div className="py-3 px-4 rounded-lg bg-secondary ">
                <section className="mb-4 text-white text-center ">
                    <div className=" h-10 w-10 rounded-full bg-slate-200 ml-5"></div>
                    <span id="username"></span>
                </section>
                <button onClick={Logout} className="bg-white rounded-md text-left w-full">
                    <span><i className="fa-solid fa-right-from-bracket"></i></span><span className="ml-5"><Link to="">Logout</Link></span>
                </button>
            </div>
        </aside>
      </div>
    
    </>
  )
}
export default SideBar