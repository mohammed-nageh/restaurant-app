

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "./side.css"

// import required modules
import { Pagination } from 'swiper/modules';


export default function Side(){

    return(
        <>
       <div className='sidehead' id='sideheado'>
        <h1 className='hside'>Testimonials</h1>
        <div className='pls'>
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper swip"
      >
        <SwiperSlide>
            <img className='photoside' src={require("../asset/maccy.jpg")} alt='cadc'/>
            <p className='textside'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
            <p className='textsidetwo'>maccy doe-front end</p>
        </SwiperSlide>
        <SwiperSlide>
        <img className='photoside' src={require("../asset/ol.jpg")} alt='cadc'/>
            <p className='textside'>Far far away, behind the word mountains, far from the countries 
                Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia </p>
            <p className='textsidetwo'>jhonthan doe-ux designer</p>

        </SwiperSlide>
       

      </Swiper>
        </div>
       </div>
        </>
    )
    
}







