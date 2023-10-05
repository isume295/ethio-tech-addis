import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Header from './Header';
import News from './News';
import Information from './Information';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Information />
      <News />
      <Footer />
    </>
  );
}
