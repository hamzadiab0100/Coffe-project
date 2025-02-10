import {item1, item2, item3, item4, item5, item6 } from '../assets';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const items = [
    {id:6,img:item1,title:"Hot Beverages",paragraph:"Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?"},
    {id:5,img:item2,title:"Hot Beverages",paragraph:"Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?"},
    {id:4,img:item3,title:"Hot Beverages",paragraph:"Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?"},
    {id:3,img:item4,title:"Hot Beverages",paragraph:"Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?"},
    {id:2,img:item5,title:"Hot Beverages",paragraph:"Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?"},
    {id:1,img:item6,title:"Hot Beverages",paragraph:"Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?"},

  ];
function Menue() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div> 
        <section className='w-full bg-[#252525] mt-0 pb-3 text-white max-w-[100%]'>
    <div  className=' flex flex-col justify-center items-center text-center text-3xl font-bold py-10'>
      <h1>Our Menu</h1>
      <div className='bg-orange-400 w-[100px] h-[2px] mt-3'></div>
    </div>
    <div className=' container mx-auto my-3 gap-10 grid grid-cols-1 mdl:grid-cols-2 lgl:grid-cols-3 ' > {items.map((card) =>
      <div data-aos="fade-right" data-aos-offset="100" className='bg-[#1e1e1e] p-2 rounded-lg sm:mx-3 xs:mx-3' key={card.id}>
        <img className='w-52 overflow-hidden m-5 hover:transition-transform duration-300 hover:scale-110' src={card.img} alt="" srcset="" />
        <h1 className='text-3xl font-bold m-2 '>{card.title}</h1>
        <p>{card.paragraph}</p>
      </div>
    )}
     
    </div>
          </section></div>
  )
}

export default Menue