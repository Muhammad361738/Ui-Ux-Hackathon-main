import React from 'react'
import Image from 'next/image'
import FoodCategory from '../foodcatagery/page'
import Meet from '../Meet/MeetChef'
import AboutUs from "../AboutUs/About"
import Experience from '@/components/Experience/Experience'
import MyManu from "../MyManu/Menu"

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

      <Experience/>
      <MyManu/>
      <Meet/>
    <FoodCategory/>
    </>
  )
}

export default HomePage