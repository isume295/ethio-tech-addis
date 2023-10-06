import React from 'react';

export default function Information() {
  return (
    <div className=" relative z-20 flex w-full justify-center pt-5 items-center bg-white">
      <div className="container flex flex-col bg-white">
        <div className="w-full draggable">
          <div className="container flex flex-col items-center gap-16 my-10">
            <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8">
              <div className="flex flex-col items-center text-mainColor">
                <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
                  <span id="countto1" />
                  50+
                </h3>
                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">Successful Projects</p>
              </div>
              <div className="flex flex-col items-center text-mainColor">
                <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
                  $
                  <span id="countto2" />
                  30m
                </h3>
                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">Annual Revenue Growth</p>
              </div>
              <div className="flex flex-col items-center text-mainColor">
                <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
                  <span id="countto3" />
                  250k+
                </h3>
                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">Global Partners</p>
              </div>
              <div className="flex flex-col items-cente text-mainColor">
                <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
                  <span id="countto4" />
                  60+
                </h3>
                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">Daily Website Visitors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
