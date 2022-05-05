import React from 'react'
import './AutoSlide.scss';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const AutoSlide = () => {
  return (
    <div className='autoSlide'>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <a href="https://youthgames.kheloindia.gov.in/" target="_blank">
            <img src="HTTPS://kheloindia.gov.in/uploads/kiug2021-web-1650967400.jpg" alt="KIUG 2021" />
            </a>
        
            
        </SwiperSlide>
        <SwiperSlide>
        <img src="HTTPS://kheloindia.gov.in/uploads/banner2-1631684016.jpg" alt="Azadi ka Amrit Mahotsav" />
        
        </SwiperSlide>
        <SwiperSlide>
        <img src="HTTPS://kheloindia.gov.in/uploads/yocrpwyrnf-1577012307.jpg" alt="Launch Ceremony - Khelo India Youth Games, Guwahati, 2020" />
        </SwiperSlide>
        <SwiperSlide>

        <img src="HTTPS://kheloindia.gov.in/uploads/pwhqcvboqe-1577012623.jpg" alt="Launch Ceremony - Khelo India Youth Games, Guwahati, 2020"  />
        

        </SwiperSlide>
        <SwiperSlide>
        <img src="HTTPS://kheloindia.gov.in/uploads/3-1577012651.jpg" alt="Launch Ceremony - Khelo India Youth Games, Guwahati, 2020" />
        </SwiperSlide>
       
      </Swiper>



    </div>
  )
}

export default AutoSlide