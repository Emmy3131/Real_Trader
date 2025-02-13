import { Link } from "react-router-dom"

const Home = () =>{
  return(
    <div>
      <section className="flex lg:flex-row flex-col px-5">
          <aside className="grow pr-5">
            <span className="flex lg:flex-row flex-col justify-between mt-4">
              <Link to="#">
                  <h1>
                    My Account
                  </h1>
              </Link>
             <Link to="#">
                <p className="bg-gray-500 text-white p-1 rounded-md">
                    Create New Account
                </p>
             </Link>
            </span>

            <span className="flex lg:gap-50 mt-4 gap-10">
                <Link to="#">
                    <p>
                      Real
                    </p>
                </Link>

                <Link to="#">
                    <p>
                      Demo
                    </p>
                </Link>
            </span>
              <hr className="w-full border-slate-400" />
            <div className="lg:mt-4 mt3">
              <span>
                <h2 className="font-semibold text-[17px]">
                Account Name
                </h2>
                <p className="lg:mt-4 mt-2 text-[22px] font-bold">
                $206,700.00
              </p>
              </span>

              <span className="flex w-full lg:gap-40 gap-10 lg:mt-4 mt-2">
                <button className="btn">
                  Withdraw
                </button>
                <button className="bg-gray-500 text-white p-1 w-32 rounded-md">
                  Deposit
                </button>
              </span>

              <span className="w-full hidden lg:block">
                <h1 className="mt-6 text-[20px font-medium]">
                  Top Traded Instruments
                </h1>
                <table className="border-2 text-center w-full">
                  <tr className="border-2">
                    <th>Pairs</th>
                    <th>Buy</th>
                    <th>Sell</th>
                    <th>Spread</th>
                  </tr>

                  <tr className="">
                    <td className="py-3">GBPUSD</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                  <tr className="">
                    <td className="py-3">GBPUSD</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                  <tr className="">
                    <td className="py-3">GBPUSD</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                  <tr className="">
                    <td className="py-3">GBPUSD</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                </table>
              </span>
              
            </div>
          </aside>

          <aside className="w-96">
            <div className="w-full mt-4">
              <h2>Quick Trade</h2>
              <div>
                  <div className="lg:w-full w-[350px] h-32 bg-slate-600">
                    okay what are you doing here
                  </div>
               <span className="flex gap-20 mt-3">
                    <Link to="#">
                        <p>
                          Instant
                        </p>
                    </Link>

                    <Link to="#">
                        <p>
                          Pending
                        </p>
                    </Link>
                </span>
                <hr className="lg:w-full w-64 border-slate-400" />

                <h2 className="mt-4">
                  Symbols
                </h2>
                <div className="w-full flex lg:gap-20 gap-10">
                    <span className="bg-gray-500 w-32 text-white p-1 rounded-md">
                        EURUSD
                    </span>
                    <span className="bg-gray-500 w-32 text-white p-1 rounded-md">
                        <p className="">0.01</p>
                    </span>
                </div>
                <div className="mt-2">
                  <p>Auto Close</p>
                </div>

                <div className="flex lg:gap-20 mt-2 gap-10">
                    <button className="text-left bg-blue-800 w-32 text-white p-1 rounded-md">
                        Buy
                        <p className="text-xs">0.012345</p>
                    </button>
                    <button className="text-left bg-red-600 w-32 text-white p-1 rounded-md">
                        Sell
                        <p className="text-xs">0.234556</p>
                    </button>
                </div>
              </div>

              <div className="w-full mt-2 hidden lg:block">
                <h2>Recent Transactions</h2>
                  <table className="border-2 text-left w-full">
                    <tr className="border-2">
                      <th>Type</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                    <tr >
                      <td className="text-[12px] py-2">Withdraw</td>
                      <td className="text-[12px]">Jan 30</td>
                      <td className="text-[12px]">$12000</td>
                      <td className="text-[12px]">Succesfull</td>
                    </tr>
                    <tr >
                      <td className="text-[12px] py-2">Withdraw</td>
                      <td className="text-[12px]">Jan 30</td>
                      <td className="text-[12px]">$12000</td>
                      <td className="text-[12px]">Succesfull</td>
                    </tr>
                    
                  </table>
              </div>
            </div>
          </aside>
      </section>
    </div>
  )
}
export default Home