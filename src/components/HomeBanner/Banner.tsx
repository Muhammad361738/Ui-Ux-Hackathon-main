import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import Image from 'next/image';
import seven from "../../../public/seven.png";

const Banner = () => {
  return (
    <div className=''>
    <div className="relative  bg-black h-[90vh] sm:h-[70vh] lg:h-[80vh]">
      {/* Background Image */}
      <div className="absolute pt-5 inset-0 w-full h-full">
        <Image 
          src={seven} 
          alt="Background" 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center" 
          priority
          className="sm:object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center sm:items-start justify-center h-full text-white px-4 sm:px-8 max-w-screen-lg mx-auto text-center sm:text-left">
        <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold italic text-orange-400">
          Restaurant Active Process
        </h4>
        <h1 className="text-base sm:text-2xl md:text-4xl lg:text-5xl font-bold mt-2">
          We <span className="text-orange-500">Document Every Food</span> <br />
          <span className="text-white">Bean Process Until It Is Saved</span>
        </h1>
        <p className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque 
          bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <button className="text-white text-xs sm:text-sm md:text-base px-4 py-2 rounded-full border-2 border-orange-500 hover:bg-gray-900">
            Read More
          </button>
          <button className="flex items-center text-white text-xs sm:text-sm md:text-base px-4 py-2 rounded-full">
            <CiPlay1 className="mr-2 bg-orange-500 rounded-full text-2xl sm:text-3xl md:text-4xl" />
            Play Video
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
