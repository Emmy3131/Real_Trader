import logo from './../../../assets/brandsImages/brand1.png'
import myImage from './../../../assets/usersImage/user1.jpg'
import { FaSearchDollar } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaBars, } from "react-icons/fa6";

const AdminHeader =() => {
  return (
    <>
            <div className=" flex w-full gap-20 items-center px2 lg:px-8 text-white my-auto">

                <aside className="mt-2 rounded-2xl bg-linear-to-b from-yellow-700 to-slate-400">
                  <img  className="h-12 w-32" src={logo} alt=""/>       
                </aside>

              <div className='flex justify-between items-center w-full'>
                <aside className="hidden lg:block">
                  <span>
                    Welcome back John
                  </span>
                </aside>

                <aside className="hidden lg:block">
                  <form>
                    <span className='flex items-center bg-slate-300 rounded-lg p-1'>
                    <FaSearchDollar />
                    <input className='bg-transparent outline-hidden ml-1' type="search" />
                    </span>
                  </form>
                </aside>

                <aside className='flex gap-12 items-center'>
                    <button className='btn hidden lg:block'>
                      Deposit Funds
                    </button>

                    <aside className='ml-[0px]'>
                    <IoIosNotifications className='text-2xl text-gray-300' />
                  </aside>
                </aside>
                  
                <aside className="">
                    <div className='flex gap-2 w-full'>
                      <img className="h-12 w-10 rounded-full" src={myImage} alt="" />
                      <div className='hidden lg:block'>
                          <h2>John Berry Wick</h2>
                          <p className='text-xs'>@john</p>
                      </div>
                    </div>
                </aside>

              </div>

            </div>
    
    </>
  )
}
export default AdminHeader