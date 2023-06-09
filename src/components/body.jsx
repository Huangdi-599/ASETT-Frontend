import React from 'react';

const BodySection = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Top 5 Coins</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Placeholder for displaying top 5 coins */}
          {/* Replace with actual coin stats or components */}
          <div className="bg-gray-200 h-32"></div>
          <div className="bg-gray-200 h-32"></div>
          <div className="bg-gray-200 h-32"></div>
          <div className="bg-gray-200 h-32"></div>
          <div className="bg-gray-200 h-32"></div>
        </div>
      </div>

      <div className="mb-8 mt-5">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-lg text-gray-200">
          Explore the key steps to get started with our crypto portfolio platform.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-gray-300 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4">1. Login</h3>
          <p className="text-lg">
            Sign in to your account to access your portfolio and track your crypto investments.
          </p>
        </div>
        <div className="border border-gray-300 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4">2. Create Portfolios</h3>
          <p className="text-lg">
            Create multiple portfolios to organize your crypto holdings based on different strategies or goals.
          </p>
        </div>
        <div className="border border-gray-300 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4">3. Manage Holdings</h3>
          <p className="text-lg">
            Add, remove, and update your holdings within each portfolio. Monitor their performance and value in real time.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className=" text-3xl font-bold mb-4">Client Reviews</h2>
        <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-lg mb-4">
              "This platform has completely transformed how I manage my crypto investments. It's so intuitive and user-friendly!"
            </p>
            <p className="text-gray-700 font-semibold">- John Doe</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-lg mb-4">
              "I highly recommend this portfolio tracker. It provides real-time data and insightful analytics that help me make informed decisions."
            </p>
            <p className="text-gray-700 font-semibold">- Jane Smith</p>
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default BodySection;
