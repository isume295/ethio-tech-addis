import React from 'react';

export default function WhatWeDo() {
  return (
    <section className="pt-20 lg:pt-[80px] pb-12 lg:pb-[0px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-mainColor mb-2 block">
                Our Services
              </span>
              <h2
                className="
                   font-bold
                   text-3xl
                   sm:text-4xl
                   md:text-[40px]
                   text-dark
                   mb-4
                   font-raleway
                   "
              >
                What We Offer
              </h2>
              <p className="text-base font text-gray-400">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 md:gap-0 -mx-2">
          <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-4">
            <div
              className="
                p-4
                h-full
                md:px-7
                xl:px-10
                bg-white
                shadow-md
                border
                border-secondColor
                hover:shadow-lg
                hover:bg-customDark
                hover:text-white
                transition duration-300 ease-in-out
                flex
                flex-col
                justify-center
                relative
                "
            >

              <h4 className="font-semibold font-raleway text-2xl text-dark mb-3">
                Refreshing Design
              </h4>
              <div className="w-1/3 h-1.5 bg-secondColor mb-4" />
              <p className="text-body-color text-sm font-poppins">
                We dejoy working with discerning clients, people for whom
                qualuty, service, integrity & aesthetics and more people for whom
                qualuty, service, integrity & aesthetics and more.
                integrity & aesthetics and more people for whom
                qualuty, service, integrity & aesthetics and more.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-4">
            <div
              className="
                p-4
                h-full
                md:px-7
                xl:px-10
                bg-white
                shadow-md
                border
                border-secondColor
                hover:shadow-lg
                hover:bg-customDark
                hover:text-white
                transition duration-300 ease-in-out
                flex
                flex-col
                justify-center
                relative
                "
            >

              <h4 className="font-semibold font-raleway text-2xl text-dark mb-3">
                Refreshing Design
              </h4>
              <div className="w-1/3 h-1.5 bg-secondColor mb-4" />
              <p className="text-body-color text-sm font-poppins">
                We dejoy working with discerning clients, people for whom
                qualuty, service, integrity & aesthetics and more people for whom
                qualuty, service, integrity & aesthetics and more.
                integrity & aesthetics and more people for whom
                qualuty, service, integrity & aesthetics and more.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-4">
            <div
              className="
                p-4
                h-full
                md:px-7
                xl:px-10
                bg-white
                shadow-md
                border
                border-secondColor
                hover:shadow-lg
                hover:bg-customDark
                hover:text-white
                transition duration-300 ease-in-out
                flex
                flex-col
                justify-center
                relative
                "
            >

              <h4 className="font-semibold font-raleway text-2xl text-dark mb-3">
                Refreshing Design
              </h4>
              <div className="w-1/3 h-1.5 bg-secondColor mb-4" />
              <p className="text-body-color text-sm font-poppins">
                We dejoy working with discerning clients, people for whom
                qualuty, service, integrity & aesthetics and more people for whom
                qualuty, service, integrity & aesthetics and more.
                integrity & aesthetics and more people for whom
                qualuty, service, integrity & aesthetics and more.
              </p>
            </div>
          </div>

        </div>
        <div className=" flex justify-center items-center mt-8">
          <button type="button" className="bg-red-600 hover:bg-secondColor text-white font-semibold py-3 px-20 text-sm mt-6 inline-flex items-center group">
            <p> READ MORE </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
