
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import "./sidebar.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



export default function Sidebar(){
    return(
       
        <div className="parent">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={require("../food/food1.jpg")} className="photo" alt='sd'/>
        </SwiperSlide>
        

        <SwiperSlide>
        <img src={require("../food/food4.jpg")} className="photo" alt='sc'/>
        </SwiperSlide>


        <SwiperSlide>
        <img src={require("../food/food2.jpg")} className="photo" alt='zc'/>
        </SwiperSlide>
      </Swiper>
      </div>
       
    )
}