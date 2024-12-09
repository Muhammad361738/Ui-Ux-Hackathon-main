import React from "react";

import Image from "next/image";

import c1 from "../../../public/c1.png"
import c2 from "../../../public/c2.png"
import c3 from "../../../public/c3.png"
import c4 from "../../../public/c4.png"

 
function MeetChef() {
  return (
    <>
      <section className="bg-black md:px-[135px]   py-[50px]">

        <div className="flex flex-col justify-center items-center">
      <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
      Chefs
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold flex-wrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center flex-wrap items-center gap-[20px]  mt-[50px]">
          <Image src={c1} alt="" className="w-[200px] md:w-[240px] md:h-[280px] cursor-pointer"/>
          <Image src={c2} alt="" className="w-[200px] md:w-[240px] md:h-[280px] cursor-pointer" />
          <Image src={c3} alt="" className="w-[200px] md:w-[240px] md:h-[280px] cursor-pointer" />
          <Image src={c4} alt="" className="w-[200px] md:w-[240px] md:h-[280px] cursor-pointer" />
        </div>
      </section>
    </>
  );
}

export default MeetChef;