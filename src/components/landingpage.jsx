import React from 'react';
import Nav from './Nav';
import HeroSection from './hero';
import BodySection from './body';
import Footer from './footer';
const LandingPage = () => {
  return (
   <div className="text-white flex flex-col space-y-10 bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url(https://media.giphy.com/media/xdkwF7unlVYjjIvl7b/giphy.gif)'}}>
      <Nav />
      <HeroSection />
      <BodySection />
      <Footer />
   </div>
  );
};

export default LandingPage;
