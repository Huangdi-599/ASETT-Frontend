import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              Your Crypto Portfolio is a comprehensive platform designed for cryptocurrency enthusiasts and investors. We provide real-time data, portfolio tracking, and advanced analytics to help you make informed decisions and manage your crypto investments effectively.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">Email: info@example.com</p>
            <p className="text-gray-300">Phone: +1 123 456 7890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 my-6" />
        <p className="text-gray-400 text-center">© 2023 Your Crypto Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
