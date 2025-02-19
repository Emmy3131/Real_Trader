import {Link} from "react-router-dom";
import { FaTimes } from "react-icons/fa";



const handleSubmit = e=>{
  e.preventDefault()
  let formData = new FormData(e.currentTarget);


  fetch('http://localhost/Real_Trader_BackEnd/MainSrc/Users/AddUsers.php', {
     method: 'POST',
     body: formData
  })
     .then((res) => res.json())
     .then((responseData) => {
        if (responseData.success == true) {
           alert(responseData.message);
           window.location.href = '/Login'
        } else {
           document.getElementById('errorSpan').innerText = responseData.message;
        }
     })
     .catch((error) => {
        console.log(error);
     })

}

const SignUp = () => {
  return (
    <>
        <section className="max-w-full min-h-dvh flex items-center">
          <div className="max-w-96 m-auto">
            <div className="border-2 p-5 rounded-md bg-white">
                <Link to="/">
                    <FaTimes />
                </Link>
                <form onSubmit={handleSubmit}>
                  <div className="text-center mb-7">
                      <h1 className="text-4xl mb-2">Sign up</h1>
                      <p className="text-xs font-semibold">Sign up to continue</p>
                  </div>

                      <div className="max-w-full space-y-7 mb-8">
                        <input className="inpute" type="text" placeholder="First Name" name="firstname"/>
                        <input className="inpute" type="text" placeholder="Last Name" name="lastname"/>
                        <input className="inpute" type="email" placeholder="Email" name="email"/>
                        <input className="inpute" type="password" placeholder="Password" name="password"/>
                        <div>
                          <input type="checkbox " required/>
                          <label for="terms" className="text-sm">
                              Agree to our <a href="#" target="_blank" className="text-secondary font-semibold">Policies</a> and
                              <a href="#" target="_blank" className="text-secondary font-semibold">Terms of services</a>
                          </label>
                        </div>
                      </div>

                  {/* <!-- Error Span to show error message --> */}
                  <span className="text-red-500 text-sm italic mb-2 block" id="errorSpan"></span>

                  <button className="bg-primary text-center text-white py-2 rounded-md font-bold w-full">
                        Sign Up 
                  </button>
                </form>
            </div>

            <div className="text-center mt-5 text-white">
                <p>
                  Already have an account?
                  <Link to="/Login" className="text-red-500">Sign In</Link>
                </p>
            </div>
          </div>
      </section>
    
    
    </>
  )
}

 export default SignUp