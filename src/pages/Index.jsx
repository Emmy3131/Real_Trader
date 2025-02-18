import { Link } from 'react-router-dom'
import displayImage from '../assets/brandsImages/Image2.png'

const Index = () => {
  return(
    <div className="h-screen lg:w-6xl m-auto">
      <section className='px-3 pb-3'>
        <div className="flex md:justify-start items-center flex-col-reverse md:flex-row">
          <aside className="">
           <div className="lg:max-w-3xl text-white">
              <h1 className="font-semibold text-4xl lg:text-[100px] lg:pt-[50px] pt-[25px]">
                  Invest Your Spare Change
              </h1>
    
              <aside className="max-w-96 mt-10 text-[20px]">
                We provide you with good investment platform which wil enable you increase the flow of your income massively 
              </aside>
           </div>
        
            <div className="rounded-3xl border-2 bg-blue-950 font-semibold text-white max-w-32 mt-10 p-3">
              <Link to="/signUp">
                <button className="max-w-full text-center">Get Started</button>
              </Link>
            </div>
         </aside>
  
  
         <aside className="max-w-full">
           <div>
             <img className="lg:min-w-96 mt-[55px]" src={displayImage} alt=""/>
           </div>
         </aside>
       </div>
      </section>
    </div>
  )
}

export default Index;