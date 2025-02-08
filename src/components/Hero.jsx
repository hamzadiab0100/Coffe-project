import React from 'react'
import {cup} from '../assets'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div>    <section className=' bg-[#3f181c]  py-5   lgl:w-[100%] mdl:w-[100%] sml:w-[100%] sm:w-[100%] xs:w-[100%]'>
    <div className="container lgl:px-5 mx-auto grid grid-cols-1 mdl:grid-cols-2 items-center gap-10 my-14 mdl:my-10 sm:my-10 xs:my-6 ">
      <div className='sm:ml-3 xs:ml-3' >
        <h3 className='  text-orange-400 lgl:text-4xl   font-bold mdl:text-4xl sml:text-4xl sm:text-4xl xs:w-[300px] xs:text-3xl'>Best Coffe</h3>
        <br/>
        <h1 className=' text-white lgl:text-4xl lgl:w-[100%] mdl:w-[390px]  mdl:text-4xl sml:text-4xl sml:w-[90%] sm:text-4xl font-semibold text-wrap w-[402px] xs:w-[300px] xs:text-3xl'>Make Your Day Great With Our Special Coffe</h1>
        <br/>
        <p className='text-white lgl:w-[490px] mdl:w-[350px] sml:w-[90%] font-normal mb-5 text-lg text-wrap xs:w-[290px] xs:text-sm '>Welcome to our coffe paradise,Where every bean tells a story and every cup sparks joy.</p>
        <br />
        <div className='flex  text-white'>
          <button className='lgl:py-3 lgl:px-7  mdl:py-2 mdl:px-5 sml:px-5 sml:py-2  sm:py-2  sm:px-5 xs:py-2 xs:px-4 mx-4  border-orange-600 rounded-3xl bg-orange-600 hover:bg-transparent  transition deration-300 ' type="button">Order Now</button>
          <button className='lgl:py-3 lgl:px-7  mdl:py-2 mdl:px-5 sml:px-5 sml:py-2 sm:py-2  sm:px-5 xs:py-2 xs:px-4 mx-4 border rounded-3xl bg-transparent hover:border-orange-400 hover:text-orange-400 transition deration-300 ' type="button"><Link to={"/contact"}>Contact Us</Link> </button>
        </div>
      </div>
      <div ><img loading='lazy' className='  mr-20  mt-10  lgl:ml-1 lgl:mt-2 lgl:mb-5 mdl:w-[500px] sml:w-[100%] sm:w-[100%]  ' src={cup} alt="" srcset="" /></div>
    </div>
    
    
          </section>
          </div>
  )
}

export default Hero