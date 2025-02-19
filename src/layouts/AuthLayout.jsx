import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

const AuthLayout = () => {
  return (
   <>  
       < Header />

       <section className="max-w-full items-center bg-primary/85 px-4 py-2">
          <div className=" m-auto">
              <Outlet />
          </div>
       </section>

       < Footer />
   </>
  )
}

export default AuthLayout