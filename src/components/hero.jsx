import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Welcome to Crypto Portfolio</h1>
            <p className=" mb-6">
              Keep track of your cryptocurrency investments and stay updated with real-time market data. Manage your portfolio, analyze performance, and make informed decisions.
            </p>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Get Started</button>
          </div>
          <div className="rounded-lg md:w-1/2">
            <img src="https://th.bing.com/th/id/OIP.eINK6-Jevuh1Si2zZs5qgQAAAA?pid=ImgDet&rs=1" alt="Hero" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
