// import Link from "next/link";
// import Hero from "./Hero"

// export default function ErrorPage() {
//   return (
//     <>
//     <Hero />
//     <div className="min-h-screen bg-white">
      
//       {/* Signup Form Section */}
//       <section className="p-10 relative bg-white pt-36 flex flex-col items-center">
//         <div className="w-[630px] text-center">
//           <h3 className="text-[96px] font-bold text-[#FF9F0D] mb-6">404</h3>
//           <p className="font-bold text-[32px] mb-4">
//             Oops! Looks like something went wrong
//           </p>
//           <p className="text-[18px] mb-4">
//             Page cannot be found Well have it figured out in no time.
//           </p>
//           <p className="text-[18px] mb-6">
//             Meanwhile check out these fresh ideas:
//           </p>
//           {/* Button */}
//           <Link href="/">
//             <button className="bg-[#FF9F0D] text-white text-[18px] font-bold px-6 py-2 rounded hover:bg-[#e8890b]">
//               Go Back to Home
//             </button>
//           </Link>
//         </div>
//       </section>
//     </div>
//  </>
//   );
// }

import { useEffect, useState } from "react";
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "yourProjectId", // Replace with your actual project ID
  dataset: "production", // Replace with your dataset name
  useCdn: true,
  apiVersion: "2023-01-01", // Replace with your API version
});

export default function FoodItems() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "food" && available == true] {
          name,
          price,
          tags,
          "imageUrl": image.asset->url
        }`
      )
      .then((data) => setFoodItems(data))
      .catch((error) => console.error("Error fetching food items:", error));
  }, []);

  return (
    <div>
      <h1>Available Food Items</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {foodItems.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              maxWidth: "200px",
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>
              Tags:{" "}
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    background: "#e0f7fa",
                    borderRadius: "4px",
                    padding: "2px 6px",
                    marginRight: "4px",
                    fontSize: "12px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
