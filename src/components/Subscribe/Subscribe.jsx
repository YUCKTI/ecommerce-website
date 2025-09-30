import React from 'react';
import Banner from "../../assets/website/orange-pattern.png";

const bannerStyle = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div 
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800"
      style={bannerStyle}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl font-semibold text-gray-800 dark:text-white">
            Get Notified About New Products
          </h1>
          <input 
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
