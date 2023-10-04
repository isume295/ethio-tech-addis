/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function News() {
  return (
    <div className="relative h-96 bg-gray-200 z-20">
      <div className="flex relative flex-col bg-green-600 justify-center p-10 gap-10 items-center">
        {/* <div className="absolute w-56 h-44 top-0 z-10 right-12 bg-customDarkRed" /> */}
        <h2
          className="
                   font-bold
                   text-2xl
                   sm:text-2xl
                   md:text-[40px]
                   text-dark
                   font-raleway
                   "
        >
          News
        </h2>
        <div className="relative z-20 h-full flex gap-4 items-center border border:red-500 shadow-2xl justify-center">

          <card className="bg-white p-8 w-[32rem]">

            <header className="flex font-light text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 rotate-90 -ml-2"
                viewBox="0 0 24 24"
                stroke="#b91c1c"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
              <p>TECH NEWS</p>
            </header>

            <h2 className="font-bold text-3xl mt-2">
              Rapid Event Notification System at Netflix
            </h2>

            <p className="mt-5">
              By:
              <a href="#" className="text-red-600"> Ankush Gulati </a>
              ,
              <a href="#" className="text-red-600"> David Gevorkyan </a>
            </p>

            <p>

              <a href="#" className="text-red-600"> Michael Clark </a>
              ,
              <a href="#" className="text-red-600"> Gokhan Ozer </a>
            </p>

            <h3 className="font-bold text-xl mt-8"> Intro </h3>
            <p className="font-light"> Netflix has more than 220 million active members who perform a variety of actions throughout each session, ranging from renaming a profile to watchi... </p>

            <button type="button" className="bg-red-600 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group">
              <p> READ MORE </p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </card>
          <div className="absolute w-56 h-44 top-0 z-10 right-12 bg-customDarkRed" />
          <card className="bg-white p-8 w-[32rem]">

            <header className="flex font-light text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 rotate-90 -ml-2"
                viewBox="0 0 24 24"
                stroke="#b91c1c"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
              <p>HOT NEWS</p>
            </header>

            <h2 className="font-bold text-3xl mt-2">
              Rapid Event Notification System at Netflix
            </h2>

            <p className="mt-5">
              By:
              <a href="#" className="text-red-600"> Ankush Gulati </a>
              ,
              <a href="#" className="text-red-600"> David Gevorkyan </a>
            </p>

            <p>

              <a href="#" className="text-red-600"> Michael Clark </a>
              ,
              <a href="#" className="text-red-600"> Gokhan Ozer </a>
            </p>

            <h3 className="font-bold text-xl mt-8"> Intro </h3>
            <p className="font-light"> Netflix has more than 220 million active members who perform a variety of actions throughout each session, ranging from renaming a profile to watchi... </p>

            <button type="button" className="bg-red-600 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group">
              <p> READ MORE </p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </card>

        </div>
      </div>
      <div className="absolute w-56 h-44 top-14 z-10 right-12 bg-customDarkRed" />
    </div>
  );
}
