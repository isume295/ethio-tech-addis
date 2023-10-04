/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import {
  Autoplay, Pagination, Navigation, EffectFade,
} from 'swiper/modules';
import img from '../../assets/image/work2.jpg';
import img2 from '../../assets/image/work1.jpg';
import img3 from '../../assets/image/work3.jpg';
import img5 from '../../assets/image/work5.jpg';
import WhatWeDo from './WhatWeDo';

const images = [
  { label: 'Image 1', src: img },
  { label: 'Image 2', src: img2 },
  { label: 'Image 3', src: img3 },
  { label: 'Image 4', src: img },
  { label: 'Image 5', src: img5 },
];

export default function Hero() {
  return (
    <>
      <div className="sticky top-0 z-10">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          slidesPerView={1}
          loop
          autoplay={true}
          speed={1500}
          effect="fade"
        >
          {images.map((image) => (
            <SwiperSlide key={image.label}>
              <section className="relative bg-blueGray-50">
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                  <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                      backgroundImage: `url(${image.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black" />
                  </div>
                  <div className="container relative  flex items-center h-96 mx-5">
                    <div className=" my-auto flex flex-wrap">
                      <div className="w-full lg:w-6/12 px-4 my-auto">
                        <div className="pr-12">
                          <h1 className="text-white font-semibold text-5xl">
                            Your story starts with us.
                          </h1>
                          <p className="mt-4 text-lg text-gray-300">
                            This is a simple example of a Landing Page you can build using
                            Notus JS. It features multiple CSS components based on the
                            Tailwind CSS design system.
                          </p>
                          <button type="button" className="text-white mt-2 text-lg">Learn more</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative z-20 overflow-x-hidden flex justify-center items-center px-10 bg-white">
        <WhatWeDo />
      </div>
    </>
  );
}
