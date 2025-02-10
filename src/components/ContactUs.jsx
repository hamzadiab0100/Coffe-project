import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
      const [status, setStatus] =useState("");
const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
};
const handleSubmit =(e) =>{
    e.preventDefault();
    emailjs
    .send("service_ty942z7", "template_7pa0ikn", formData, "0y7HTZn5XDEDyom5i")
    .then((response) => {
      setFormData({ name: "", email: "",  message: "" }); 
    })
    .catch((error) => {
      setStatus("❌ حدث خطأ أثناء الإرسال.");
    });
};
  return (
    <div className='bg-[#3F181C] py-20'>
<section className='container mx-auto grid lgl:grid-cols-[2fr_1fr] gap-10 px-3'>
<div data-aos="fade-right" data-aos-offset="100" className=' bg-[#1e1e1e] flex flex-col text-white p-8 w-[100%]'>
    <div>
        <h1 className='xs:text-2xl  lgl:text-4xl font-bold text-orange-400 mb-2'>Need Help? Open a Ticket</h1>
        <p className='lgl:text-lg'>Our support team will get back to you ASAP via email.</p><br />
    </div><form method='post' onSubmit={handleSubmit}>
    <div className='grid grid-cols-1 sml:grid-cols-2 sml:gap-10'> 
        <div >    
        <label className='font-bold text-xl p-2 py-10' htmlFor="name" >Your Name</label><br />
        <input   name="name"
            value={formData.name}
            onChange={handleChange} id='name' required className=' w-full my-2 bg-[#3F181C] py-3 px-3 rounded-md text-white text-sm 
                      focus:ring-2 focus:ring-orange-400 outline-none transition
                     duration-200'   type='name' placeholder='Enter Your Name'/>
        </div>
        <div >
         <label className='font-bold text-xl p-2 py-10' htmlFor="email">Your Email</label><br />
         <input   name="email"
            value={formData.email}
            onChange={handleChange} id='email' required className=' w-full my-2 bg-[#3F181C] py-3 px-3 rounded-md text-white text-sm 
                      focus:ring-2 focus:ring-orange-400 outline-none transition
                     duration-200'  type='email' placeholder='Enter Your Email'/>
        </div>
    </div>
    <div>
        <textarea  name="message"
            value={formData.message}
            onChange={handleChange} required className='my-8 max-h-[200px] min-h-[200px]  bg-[#3F181C] px-5 py-2 text-xl rounded-lg focus:ring-orange-400 outline-none focus:ring-2 w-[100%]'  id="" placeholder='Write your message here... '></textarea>
            <p>{status}</p>
    </div>
    <button className="px-6 py-3 bg-[#F97316] hover:bg-[#bb5309] rounded-full text-white font-semibold  
                 shadow-md   focus:outline-none focus:ring-2
                   focus:ring-orange-500 transition duration-300" type="submit">Submit Ticket</button>
    </form>
    

    
</div>

<div data-aos="fade-up" data-aos-offset="100" className=' bg-[#1e1e1e] p-8 text-white'>
    <div className='' >
        <h1 className='xs:text-xl font-bold mdl:text-2xl text-orange-400 pb-2'>Subscribe to receive future updates</h1>
        <p className='pb-3 xs:text-sm mdl:text-lg text-base '>Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus.</p>
        <hr />
        <form method='post' onSubmit={handleSubmit}>
        <input name="name"
            value={formData.name}
            onChange={handleChange}  required className=' w-full mt-10 my-5 bg-[#3F181C] py-3 px-3 rounded-md text-white text-sm 
                      focus:ring-2 focus:ring-orange-400 outline-none transition
                     duration-200 '   type='name' placeholder='Enter Your Name'/>

                     <input name="email"
            value={formData.email}
            onChange={handleChange} required className=' w-full my-5 bg-[#3F181C] py-3 px-3 rounded-md text-white text-sm 
                      focus:ring-2 focus:ring-orange-400 outline-none transition
                     duration-200 '   type='email' placeholder='Enter Your Email'/>
                     <button className="w-full bg-[#F97316] hover:bg-[#bb5309] focus:ring-orange-500  mt-5 py-2 px-3 rounded-md text-gray-100 text-sm      transition duration-200" type="submit">Submit</button>
        </form>
    </div>

</div>
</section>
   </div>
  )
}

export default ContactUs