import React, { useState } from 'react'
import { logo } from '../assets'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import '../App.css'


  const links = [
    { id: 1, page: 'Home', path: '/' },
    { id: 2, page: 'About', path: '/about' },
    { id: 3, page: 'Contact', path: '/contact' },
    { id: 4, page: 'Support', path: 'support' },
    { id: 5, page: 'Pricing', path: '/pricing' },
    
    

  ]
  
function NavBar() {
  const [openBar,setopenBar] = useState (false)

  
  return (
    <div className='bg-[#3f181c] text-white py-4 naV  '>
      <div className="container mx-auto p-1  flex justify-between items-center">
         <div className='flex items-center '>
          <img src={logo} alt="logo" className='w-11 h-9 px-1' /><h1 className='ml-1 font-bold text-3xl text-white'><Link to={"/"}>Coffe</Link> </h1>
          

         </div>
         <div >
          <ul className='hidden mdl:flex justify-between font-normal '>
            {links.map((item) =>
            <li className='mx-3 px-2 font-bold Bar Nn' key={item.id}>
              <Link className='Link-nav' to={item.path} > {item.page} </Link>
            </li>                                   
            )}                
          </ul>
         </div>
         <div className=' hidden mdl:flex p-2 px-4 gap-4 font-medium border rounded bg-transparent hover:border-orange-400 hover:text-orange-400 transition deration-300 btn'>
         <button>Get Started </button> 
         </div>

         <div className='mdl:hidden  hamza' onClick={() => setopenBar(!openBar)}>

           <FiMenu fontSize="45px" />
         </div>
        

         </div>
      <div  className={`fixed top-0 right-0 bg-[#3F181c] w-[150px] h-[100vh] z-50 shadow-lg transform ${
          openBar ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-in-out`}  >
          <div onClick={() => setopenBar(!openBar)} className='pointer'>
          <FiX className='m-2'  fontSize="45px"/>
          <div>
            <ul className='text-center w-[100%] '>
              {links.map((item) =>
              
              <li className='hm my-5 Bar font-bold' key={item.id}>

                <Link to={item.path}>{item.page}</Link>

              </li>
              
              
              
              )}

            </ul>
            <div className=' text-center ml-[26px] my-10 w-fit p-2  xs:ml-[33px] font-medium border rounded bg-transparent hover:border-orange-400 hover:text-orange-400 transition deration-300 '>
         <button>Get Started </button> 
         </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default NavBar