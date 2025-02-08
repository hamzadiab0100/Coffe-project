import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { user1,user2,user3,user4, user5 } from '../assets';


const Users =[
 {id:5,img:user1,name:"~ Emily Brawen",pragaph:"A perfect start to my day, every day.",},
 {id:4,img:user2,name:"~ Jane Smith",pragaph:"Amazing service and top-notch coffee!",},
 {id:3,img:user3,name:"~ Emily Brawen",pragaph:"Best coffee shop in town!",},
 {id:2,img:user4,name:"~ Danny Alfis",pragaph:"Friendly staff and great ambiance.",},
 {id:1,img:user5,name:"~ Hamza Diab",pragaph:"It is an excellent site because I made it",},



];
export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    <section className='w-full bg-[#252525] mt-0 pb-3 text-white py-8'>
  <div className='flex flex-col items-center text-center'>
    <h1 className='text-3xl font-bold '>Testimonials</h1>
    <div className='bg-orange-400 w-[100px] h-[2px] mt-3'></div>
  </div >
  <div className='container mx-auto my-4 swiper'>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
     
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <div>
          {Users.map((user) =>
          <SwiperSlide key={user.id}>
            <div className='flex flex-col py-5 items-center text-center '>
              <img className='h-32 rounded-full' src={user.img}  />
              <p className='py-3 '>{user.pragaph}</p>
              <h1 >{user.name}</h1>
            </div>
          </SwiperSlide>
          )}
        </div>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
  </div>
</section>
     
    </>
  );
}
