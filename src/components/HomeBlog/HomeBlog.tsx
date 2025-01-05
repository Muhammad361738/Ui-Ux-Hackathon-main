import React from 'react';
import Image from 'next/image';
import { LiaCommentDotsSolid } from "react-icons/lia";
import { LuShare2 } from "react-icons/lu";
import { BiLike } from "react-icons/bi";
import eight01 from "../../../public/eight01.png"
import eight02 from "../../../public/eight02.png"
import about1 from "../../../public/about1.png"
const HomeBlog = () => {
    return (
        <div className='bg-black'>
            <div className="flex flex-col text-center w-full mb-2 pt-20">
  <h2 className="text-lg sm:text-xl font-medium title-font mb-4 text-orange-500 italic">
    Blog Post
  </h2>
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400">
    La<span className="text-white">test News & Blog</span>
  </h1>
</div>

    <section className="text-white body-font">
  <div className="container px-2 py-10 mx-auto">
    <div className="flex flex-wrap -m-3">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src= {eight01}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="text-sm title-font font-medium text-orange-500 mb-3">
             10 February 2022
            </h2>
            <p className="leading-relaxed mb-2 text-lg text-bold">
            Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
            </p>
            <div className="flex items-center flex-wrap">
              <a className="text-white items-center md:mb-2 lg:mb-0">
                Learn More
              </a>
              <span className="text-white mr-3 items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg py-1 ">
              <BiLike/>
              </span>
              <span className="text-orange-500 items-center leading-none text-lg mr-2">
              <LiaCommentDotsSolid/>
              </span>
              <span className="text-white items-center leading-none text-lg ">
              <LuShare2/>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={eight02}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="text-sm title-font font-medium text-orange-500 mb-3">
            10 February 2022
            </h2>
            <p className="leading-relaxed mb-2 text-lg text-bold">
            Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
            </p>
            <div className="flex items-center flex-wrap">
              <a className="text-white items-center md:mb-2 lg:mb-0">
                Learn More
              </a>
              <span className="text-white mr-3 items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg py-1 ">
              <BiLike/>
              </span>
              <span className="text-orange-500 items-center leading-none text-lg mr-2">
              <LiaCommentDotsSolid/>
              </span>
              <span className="text-white items-center leading-none text-lg ">
              <LuShare2/>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src= {about1}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="text-sm title-font font-medium text-orange-500 mb-3">
            10 February 2022
            </h2>
            <p className="leading-relaxed mb-2 text-lg text-bold">
            Curabitur rutrum velit ac congue malesuada
            </p>
            <div className="flex items-center flex-wrap ">
              <a className="text-white items-center md:mb-2 lg:mb-0">
                Learn More
              </a>
              <span className="text-white mr-3 items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg py-1 ">
              <BiLike/>
              </span>
              <span className="text-orange-500 items-center leading-none text-lg mr-2">
              <LiaCommentDotsSolid/>
              </span>
              <span className="text-white items-center leading-none text-lg ">
              <LuShare2/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
        </div>
    );
}

export default HomeBlog;
