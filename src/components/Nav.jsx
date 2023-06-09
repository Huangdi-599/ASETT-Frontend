import React from 'react';

const Navbar = () => {
  return (
    <nav className="py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="font-bold text-xl">ASETT</div>
        <div>
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full mr-2">
            Log In
          </button>
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
