/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  Autoplay, Pagination, Navigation, EffectFade,
} from 'swiper/modules';
import 'swiper/css/pagination';

export default function Partners() {
  const images = [
    { src: 'https://synaxtech.com/wp-content/uploads/2023/01/Nevis-Logo-scaled.jpg' },
    { src: 'https://synaxtech.com/wp-content/uploads/2023/01/Kron-Logo-scaled.jpg' },
    { src: 'https://synaxtech.com/wp-content/uploads/2023/01/Cyble-Logo-scaled.jpg' },
    { src: 'https://synaxtech.com/wp-content/uploads/2023/01/Global-Relay-Logo-scaled.jpg' },
    { src: 'https://synaxtech.com/wp-content/uploads/2023/01/GuardyooLogo-scaled.jpg' },
    { src: 'https://synaxtech.com/wp-content/uploads/2023/01/Clari5-Logo-scaled.jpg' },
    { src: 'https://synaxtech.com/wp-content/uploads/2023/01/Cofense-Logo-2-scaled.jpg' },
    { src: 'https://synaxtech.com/wp-content/uploads/2023/01/Kratikal-Logo-scaled.jpg' },
    { src: 'https://synaxtech.com/wp-content/uploads/2023/01/Nevis-Logo-scaled.jpg' },
    { src: 'https://synaxtech.com/wp-content/uploads/2023/01/NSFOCUS-Logo-1-scaled.jpg' },
    { src: 'https://synaxtech.com/wp-content/uploads/2023/01/Nevis-Logo-scaled.jpg' },

  ];
  return (
    <div className="relative bg-white flex justify-center items-center h-48 md:h-60 z-20">
      <div className="container hidden md:flex">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          slidesPerView={5}
          loop
          autoplay={true}
          pagination={{ clickable: false }}
        >

          {images.map((image) => (
            <SwiperSlide key={image.src}>
              <div className="flex px-8 py-20">
                <div className="flex justify-center items-center ">
                  <img className="h-8 md:h-16" src={image.src} alt="img" />
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
      <div className="container flex md:hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          slidesPerView={1}
          loop
          autoplay={true}
          pagination={{ clickable: false }}
        >

          {images.map((image) => (
            <SwiperSlide key={image.src}>
              <div className="flex px-8 justify-center items-center py-10">
                <div className="flex justify-center items-center ">
                  <img className="h-12" src={image.src} alt="img" />
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  );
}
