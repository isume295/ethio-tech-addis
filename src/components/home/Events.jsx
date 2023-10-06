/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Events() {
  return (
    <section className="bg-white relative z-20">
      <span id="blackOverlay" className="w-full h-full absolute opacity-80 bg-secondColor" />
      <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-mainColor" />
      <div className="container relative px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800  text-center capitalize lg:text-4xl dark:text-white">Events</h1>

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="img" />

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
            <p className="text-lg text-lightMain uppercase">October 10</p>

            <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
              All the features you want to know
            </a>

            <p className="mt-3 text-md text-gray-500 dark:text-gray-300 md:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
              . Iure veritatis sint autem nesciunt,
              laudantium quia tempore delect Lorem ipsum dolor sit amet consectetur adipisicing elit
              . Iure veritatis sint autem nesciunt Iure veritatis sint autem nesciunt,
              laudantium quia tempore delect Lorem ipsum dolor sit amet consectetur adipisicing elit
              . Iure veritatis sint autem nesciunt
            </p>

            <a href="#" className="inline-block mt-2 text-lightMain underline hover:text-blue-400">Read more</a>

            <div className="flex items-center mt-6">
              <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="img" />

              <div className="mx-4">
                <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
