/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from '../../assets/image/work2.jpg';
// import img2 from '../../assets/image/work1.jpg';
// import img3 from '../../assets/image/work3.jpg';
// import img5 from '../../assets/image/work5.jpg';

// const images = [
//   { label: 'Image 1', src: img },
//   { label: 'Image 2', src: img2 },
//   { label: 'Image 3', src: img3 },
//   { label: 'Image 4', src: img },
//   { label: 'Image 5', src: img5 },
// ];

export default function Hero() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="h-screen bg-green-500">
          <div
            className="h flex flex-col justify-center"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="w-full h-full bg-red-400" />

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}
