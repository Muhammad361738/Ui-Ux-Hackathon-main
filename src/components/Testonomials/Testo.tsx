import React from 'react';
import Image from 'next/image';
import whiteman from "../../../public/whiteman.png"
const Testo = () => {
    return (
        <div className='bg-black pb-10 '>
            <div className=" w-full  pt-10 ">
  <h2 className="text-xl  pl-20 lg:pl-40 xl:pl-52 font-bold text-orange-500 italic">Testimonials</h2>
  <h1 className="text-3xl pl-20 lg:pl-40 xl:pl-52 font-semibold text-white">What our clients are saying</h1>
</div>
<div className="font-[sans-serif] max-w-[410px] h-auto p-6 rounded-lg mx-auto shadow-[0_6px_18px_-6px_rgba(193,195,248)] bg-white relative mt-12">
  <Image
    src= {whiteman} alt="img"
    className="w-16 h-16 rounded-full absolute right-0 left-0 mx-auto -top-7"
  />
  <div className="mt-6 text-center">
    <div>
      <h4 className="text-sm font-extrabold text-gray-800">Alamin Hasan</h4>
      <p className="text-xs text-gray-500 mt-0.5">
        Food Specialist 
      </p>
    </div>
      <p className="text-sm text-gray-800 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. 
     Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
     mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
      </p>
    </div>
    <div className="flex justify-center space-x-1 mt-4">
      <svg
        className="w-5 fill-[#facc15]"
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
      <svg
        className="w-5 fill-[#facc15]"
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
      <svg
        className="w-5 fill-[#facc15]"
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
      <svg
        className="w-5 fill-[#facc15]"
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
      <svg
        className="w-5 fill-[#CED5D8]"
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
    </div>
  </div>

        </div>
    );
}

export default Testo;
