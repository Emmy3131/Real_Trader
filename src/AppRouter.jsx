import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "/src/pages/Index";
import About from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";
import Login from "/src/pages/auth/Login"
import SignUp from "./pages/auth/signUp";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import AdminUI from "./pages/admin/AdminUI";
import Home from "./pages/admin/Dashbord/UserDetails/Home";
import AccountDetails from "./pages/admin/Dashbord/UserDetails/AccountDetails";


const AppRouter = () => {
  return(
    <BrowserRouter>
        <Routes>
            <Route element={<GuestLayout/>}>
              <Route path="/" element = {<Index />} />
              <Route path="about" element = {<About />} />
              <Route path="contact" element = {<Contact />} />
              <Route path="Services" element = {<Services />} />
            </Route>
            <Route element={<AuthLayout />} >
              <Route path="/Login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
            </Route>
            <Route element={<AuthenticatedLayout />} >
              <Route path="AdminUI" element={<AdminUI />} />
              <Route path="Dashbord" element={<Home />} />
              <Route path="Accounts" element={<AccountDetails />} />
            </Route>

            
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
