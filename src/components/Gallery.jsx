import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,} from '../assets'


const gallerys =[
    {id:1,img:gallery1},
    {id:2,img:gallery2},
    {id:3,img:gallery3},
    {id:4,img:gallery4},
    {id:5,img:gallery5},
    {id:6,img:gallery6},
  ]

function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>  <section className='w-full bg-[#3f181c] mt-0 py-8 text-white '>
    <div className='flex flex-col items-center text-center'><h1 className='text-3xl font-bold '>Gallery</h1>
    <div className='bg-orange-400 w-[100px] h-[2px] mt-3'></div></div>
    <div className='container gap-10 py-5 mx-auto px-3 lgl:px-5 grid grid-cols-1 mdl:grid-cols-2 lgl:grid-cols-3 ' >
      {gallerys.map((imgs) =>
      
      <div data-aos="fade-up" data-aos-offset="100" className='overflow-hidden rounded-lg shadow-md' key={imgs.id} >
        <img className='w-full h-full object-cover transition-transform duration-300 hover:scale-105' src={imgs.img} alt="" />
      </div>
      )}

    </div>

  </section></div>
  )
}

export default Gallery