import { Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { storeAuthUser } from "./js/AuthService"




const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = e=>{
    e.preventDefault()
    let formData = new FormData(e.currentTarget);
  
    fetch('http://localhost/Real_Trader_BackEnd/MainSrc/Users/Authenticate.php', {
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((responseData) => {
        if (responseData.success == true) {        
          storeAuthUser(responseData.user, responseData.auth_token)
          navigate('/AdminUI')
        } else {
          document.getElementById('errorSpan').innerText = responseData.message;
          alert(responseData.message)
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <>
      <section className="max-w-full min-h-dvh flex items-center">
            <div className="max-w-96 m-auto">
              <div className="border-2 p-5 rounded-md bg-white">
                <Link to="/">
                    <FaTimes />
                </Link>
                <form method="post" name="form_login" onSubmit={handleSubmit}>
                  <div className="text-center mb-7">
                    <h1 className="text-4xl mb-2">Sign in</h1>
                    <p className="text-xs font-semibold">Sign in to continue</p>
                  </div>

                  <div className="max-w-full space-y-7 mb-8">
                    <input className="inpute" type="email" placeholder="Email" name="email"/>
                    <input className="inpute" type="password" placeholder="Password" name="password"/>
                    <div className="flex items-start justify-between">
                      <aside>
                        <input type="checkbox" name="terms" id="terms"/>
                        <label htmlFor="terms" className="text-sm">
                          Remember me
                        </label>
                      </aside>

                      <aside>
                        <a href="#" className="font-semibold text-secondary text-sm">Forgot password?</a>
                      </aside>
                    </div>
                  </div>
                  {/* <!-- Error Span to show error message --> */}
                  <span className="text-red-500 text-sm italic mb-2 block" id="errorSpan"></span>

                  <button className="bg-primary text-center text-white py-2 rounded-md font-bold w-full">
                      Sign in
                  </button>
                </form>
              </div>

              <div className="text-center mt-5">
                <p className="text-white">
                  Don't have an account?
                  <Link to="/SignUp" className="text-red-600">Sign Up</Link>
                </p>
              </div>
            </div>
      </section>
    
    
    </>
  )
}

export default Login