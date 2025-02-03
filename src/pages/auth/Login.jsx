import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <section className="max-w-full min-h-dvh flex items-center">
            <div className="max-w-96 m-auto">
              <div className="border-2 p-5 rounded-md bg-white">
                <Link to="/">
                    <FaTimes />
                </Link>
                <form method="post" name="form_login">
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
                        <label for="terms" className="text-sm">
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

                  <div className="bg-primary text-center text-white py-2 rounded-md">
                    <button className="max-w-full font-bold">
                      Sign in
                    </button>
                  </div>
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