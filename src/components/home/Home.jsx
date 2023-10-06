import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Header from './Header';
import News from './News';
import Information from './Information';
import Footer from './Footer';
import Partners from './Partners';
import WorkWithUs from './WorkWithUs';
import Events from './Events';
// import Trainigs from './Trainigs';
import TrainingTwo from './TrainingTwo';

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Information />
      <WorkWithUs />
      <TrainingTwo />
      <News />
      <Events />
      <Partners />
      <Footer />
    </>
  );
}
