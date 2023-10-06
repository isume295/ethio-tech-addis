import React from 'react';
import img from '../../assets/image/ppl.jpg';

export default function WorkWithUs() {
  return (
    <div className="relative z-20 h-[480px] md:h-screen flex justify-center items-center md:py-4 bg-white">
      <div
        className="w-full relative h-full md:h-5/6 opacity-90 bg-mainColor"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <span id="blackOverlay" className="w-full h-full absolute opacity-80 bg-secondColor" />
        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-mainColor" />

        <div className="container relative  flex justify-center items-center h-full">
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

    </div>
  );
}
