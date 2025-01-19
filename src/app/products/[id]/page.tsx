// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { FaStar } from "react-icons/fa6";
// import { IoBagOutline } from "react-icons/io5";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { LuGitCompareArrows } from "react-icons/lu";
// import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
// import { IoLogoGithub } from "react-icons/io";
// import Link from "next/link";
// import App from "../slider";
// import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// // Define Params type explicitly for dynamic route parameter
// interface Params {
//   id: string;  // Dynamic route parameters are always strings
// }

// interface Data {
//   id: number;
//   img: string;
//   title: string;
//   price: string;
// }

// const data: Data[] = [
//   { id: 1, img: "/images/sh1.png", title: "Fresh Lime", price: "$45.00" },
//   { id: 3, img: "/images/sh3.png", title: "Pizza", price: "$43.00" },
//   { id: 4, img: "/images/sh4.png", title: "Cheese Butter", price: "$10.00" },
//   { id: 6, img: "/images/sh6.png", title: "Chicken Chup", price: "$25.00" },
//   { id: 9, img: "/images/sh3.png", title: "Pizza", price: "$43.00" },
//   { id: 11, img: "/images/sh5.png", title: "Sandwiches", price: "$25.00" },
// ];

// const Page = ({ params }: { params: Promise<Params> }) => {
//   const [quantity, setQuantity] = useState(1);
//   const router = useRouter();

//   // Unwrap the `params` using `React.use()` to safely access the `id`
//   const [resolvedParams, setResolvedParams] = React.useState<Params | null>(null);

//   React.useEffect(() => {
//     // Wait for params to resolve
//     params.then((resolvedParams) => {
//       setResolvedParams(resolvedParams);
//     });
//   }, [params]);

//   const handleIncrement = () => setQuantity((prev) => prev + 1);

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity((prev) => prev - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     console.log("Product added to cart:", { name: "Yummy Chicken Chup", price: 54.0, quantity });
//     alert("Added to Cart!");
//   };

//   if (!resolvedParams) {
//     // You can return a loading spinner or some placeholder while waiting for params
//     return <div>Loading...</div>;
//   }

//   // Convert id to a number (params.id is a string)
//   const productId = parseInt(resolvedParams.id, 10);
//   if (isNaN(productId)) {
//     router.push("/error");
//     return null;
//   }

//   const filteredItem = data.find((item) => item.id === productId);

//   if (!filteredItem) {
//     router.push("/error");
//     return null;
//   }

//   return (
//     <>
//       <section
//         className="bg-cover bg-center h-64 flex items-center justify-center"
//         style={{ backgroundImage: "url('/images/bg.png')" }}
//       >
//         <div className="text-center text-white">
//           <h2 className="text-4xl font-bold">Shop Details</h2>
//           <p className="pt-2">
//             <Link href="/" className="text-yellow-400">
//               Home
//             </Link>{" "}
//             › Shop Details
//           </p>
//         </div>
//       </section>

//       <div className="md:max-w-[1920px]">
//         {/* first div */}
//         <div className="md:max-w-[1320px] my-24 flex flex-col px-8 gap-6 md:flex-row">
//           {/* Left div */}
//           <div className="md:max-w-[647px] flex flex-col md:flex-row gap-6 h-fit w-full">
//             <div className="h-[491px] space-y-6">
//               <Image
//                 src="/images/sh2.png"
//                 alt="image"
//                 width={132}
//                 height={129}
//                 className="md:w-[132px] w-[200px] object-cover md:ml-[30px] h-[129px] "
//               />
//               <Image
//                 src="/images/sh3.png"
//                 alt="image"
//                 width={132}
//                 height={129}
//                 className="md:w-[132px] w-[200px] object-cover md:ml-[30px] h-[129px] "
//               />
//               <Image
//                 src="/images/sh4.png"
//                 alt="image"
//                 width={132}
//                 height={129}
//                 className="md:w-[132px] w-[200px] object-cover md:ml-[30px] h-[129px] "
//               />
//               <Image
//                 src="/images/sh5.png"
//                 alt="image"
//                 width={132}
//                 height={129}
//                 className="md:w-[132px] w-[200px] object-cover md:ml-[30px] h-[129px] "
//               />
//             </div>
//             <div>
//               <Image
//                 src="/images/sh6.png"
//                 alt="image"
//                 width={491}
//                 height={598}
//                 className="md:max-w-[491px] w-[200px] ml-[30px] h-auto mt-[6.25rem] md:h-[598px]"
//               />
//             </div>
//           </div>
//           {/* right div */}
//           <div className="md:max-w-[615px] px-3 space-y-2 h-fit w-full">
//             <div className="flex flex-col md:flex-row">
//               <button className="w-[86px] h-[24px] bg-[#FF9F0D] text-[#ffffff] rounded-[6px] text-[14px] font-[400] font-[inner]">
//                 In stock
//               </button>
//               <Pagination className="mt-[-30px] hidden md:block ml-[40%]">
//                 <PaginationContent>
//                   <PaginationItem>
//                     <PaginationPrevious href="/" />
//                   </PaginationItem>
//                   <PaginationItem>
//                     <PaginationNext href="/shop" />
//                   </PaginationItem>
//                 </PaginationContent>
//               </Pagination>
//             </div>
//             <h2 className="md:text-[48px] text-[28px] font-helvetica font-bold md:max-w-[510px] w-full h-[56px]">
//               Yummy Chicken Chup
//             </h2>
//             <p className="text-[18px] font-inter font-[400] text-justify md:max-w-[510px] w-full h-auto mb-4 border-b-2 pb-4 pt-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
//               volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
//               vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
//             </p>
//             <h2 className="text-[32px] font-helvetica font-bold md:max-w-[510px] h-[56px]">$54.00</h2>
//             <div className="flex gap-2 text-[#828282]">
//               <FaStar className="text-[#FF9F0D]" size={16} />
//               <FaStar className="text-[#FF9F0D]" size={16} />
//               <FaStar className="text-[#FF9F0D]" size={16} />
//               <FaStar className="text-[#FF9F0D]" size={16} />
//               <FaStar className="text-[#FF9F0D]" size={16} />
//               <span className="border-x-2 px-4 text-[#828282] text-[16px] font-[400] font:inter">5.0 Rating</span>
//               22 Reviews
//             </div>
//             <p className="text-[18px] font-inter font-[400] md:max-w-[510px] h-auto mb-4 pb-4 pt-4">Dictum/cursus/Risus</p>
//             <div className="flex flex-col md:flex-row gap-6 pb-8 border-b-2">
//               <div className="flex md:max-w-[181px] h-[50px]">
//                 <button onClick={handleDecrement} className="w-[60px] border-2 p-2 text-[28px]">
//                   &#45;
//                 </button>
//                 <div className="w-[60px] border-2 pt-3 p-2 text-center">{quantity}</div>
//                 <button onClick={handleIncrement} className="w-[60px] border-2 p-2 text-[25px]">
//                   &#43;
//                 </button>
//               </div>
//               <button
//                 onClick={handleAddToCart}
//                 className="w-full text-[14px] md:max-w-[333px] md:h-[50px] rounded-[5px] bg-[#FF9F0D] text-[#ffffff] font-semibold"
//               >
//                 Add to Cart
//               </button>
//             </div>
//             <div className="flex gap-5 pb-6">
//               <button className="text-[#828282] font-[inner]">
//                 <IoBagOutline size={20} />
//               </button>
//               <button className="text-[#828282] font-[inner]">
//                 <IoIosHeartEmpty size={20} />
//               </button>
//               <button className="text-[#828282] font-[inner]">
//                 <LuGitCompareArrows size={20} />
//               </button>
//             </div>
//             <div className="flex gap-3">
//               <button className="bg-[#FF9F0D] w-[45px] h-[45px] rounded-full text-[#ffffff]">
//                 <FaFacebook size={16} />
//               </button>
//               <button className="bg-[#FF9F0D] w-[45px] h-[45px] rounded-full text-[#ffffff]">
//                 <FaInstagram size={16} />
//               </button>
//               <button className="bg-[#FF9F0D] w-[45px] h-[45px] rounded-full text-[#ffffff]">
//                 <FaLinkedin size={16} />
//               </button>
//               <button className="bg-[#FF9F0D] w-[45px] h-[45px] rounded-full text-[#ffffff]">
//                 <FaYoutube size={16} />
//               </button>
//               <button className="bg-[#FF9F0D] w-[45px] h-[45px] rounded-full text-[#ffffff]">
//                 <IoLogoGithub size={16} />
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* App component for carousel or slider */}
//         <App />
//       </div>
//     </>
//   );
// };

// export default Page;
import React from "react";

const ProductPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Product ID: {params.id}</h1>
    </div>
  );
};

export default ProductPage;
