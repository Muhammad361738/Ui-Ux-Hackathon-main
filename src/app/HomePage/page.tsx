import React from 'react'
import Image from 'next/image'
import FoodCategory from '../foodcatagery/page'
import Meet from '../Meet/MeetChef'
import AboutUs from "../AboutUs/About"
import Experience from '@/components/Experience/Experience'
import MyManu from "../MyManu/Menu"
import { TbGlassFull } from "react-icons/tb";
import about1 from "../../../public/about1.png"
import { PiCookieThin, PiHamburger } from "react-icons/pi";
import Testo from "../../components/Testonomials/Testo"
import Banner from '@/components/HomeBanner/Banner'
import HomeBlog from '@/components/HomeBlog/HomeBlog'


function HomePage() {
  return (
    <>
    <section className='bg-black  pt-20 lg:pt-40 px-3 md:px-[135px] flex flex-col justify-evenly lg:flex-row  md:items-center py-[50px]'>
        {/* Heading */}
        <div className='text-white w-full md:w-[50%]'>
  <h1 className='md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap'>
    Its Quick & Amusing!
  </h1>

  <h1 className='text-[25px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal'>

    <span className='text-[#FF9F0D]'>Th</span>e Art of speed food Quality
  </h1>

  <p className='text-[10px] md:text-[16px] font-normal'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
  </p>

  <div className='flex flex-col md:flex-row items-center md:items-start'>

  <button className='bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800'>
    See More
  </button>
  </div>
</div>

        {/* Image */}

        <div className='mt-[50px] md:mt-0 '>   
            <Image 
                src="/food.png"
                alt='Hero Image'
                width={700}
                height={500}
                className=''
            />

        </div>
    </section>
      <AboutUs/>
      <FoodCategory/>
      <section className="bg-black text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-col lg:flex-row items-center lg:w-4/5 mx-auto">
      <Image 
        src={about1} 
        alt="fourth01" 
        className="rounded radius-6px w-full lg:w-[362px] h-auto mb-4 lg:mb-0"
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-orange-500 italic text-lg">Why Choose Us</h2>
        <h1 className="text-orange-500 text-2xl sm:text-3xl lg:text-4xl font-medium mb-1 font-bold">
          Ex<span className="text-white">tra ordinary taste And Experienced</span>
        </h1>
        <div className="flex mb-3">
          <p className="leading-relaxed text-white py-4 pl-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
        </div>
        <div className="flex gap-4 mb-4 flex-wrap justify-center">
          <div className="bg-orange-500 p-4 rounded-lg text-center w-1/3 sm:w-1/4">
            <div className="text-white text-5xl px-1">
              <PiHamburger />
            </div>
            <p className="text-white">Fast Food</p>
          </div>
          <div className="bg-orange-500 p-4 rounded-lg text-center w-1/3 sm:w-1/4">
            <div className="text-white text-6xl px-1">
              <PiCookieThin />
            </div>
            <p className="text-white">Lunch</p>
          </div>
          <div className="bg-orange-500 p-4 rounded-lg text-center w-1/3 sm:w-1/4">
            <div className="text-white text-6xl px-1">
              <TbGlassFull />
            </div>
            <p className="text-white">Dinner</p>
          </div>
        </div>
        <div className="bg-white m-8 px-2 text-center rounded-lg">
          <h1 className="text-orange-500 text-2xl sm:text-3xl lg:text-4xl">
            30+ <span className="text-gray-900 text-xl">Years of</span>{" "}
            <p className="text-black text-xl">Experienced</p>
          </h1>
        </div>
      </div>
    </div>
  </div>
</section>

      <Experience/>
      <MyManu/>
      <Meet/>
      <Testo/>
      <Banner/>
      <HomeBlog/>
    </>
  )
}

export default HomePage