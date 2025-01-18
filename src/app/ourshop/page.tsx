"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// Define types for the data being fetched
interface Food {
  _id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  originalPrice: number;
  available: boolean;
  imageUrl: string;
  _createdAt: string;
  _updatedAt: string;
}

const SanityData = () => {
  const [foods, setFoods] = useState<Food[]>([]); // State with Food type
  const [loading, setLoading] = useState<boolean>(true); // Loading state with type
  const [error, setError] = useState<string | null>(null); // Error state with type

  // Fetch data from Sanity using plain fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = encodeURIComponent(`
          *[_type == "food"] {
            _id,
            name,
            category,
            description,
            price,
            originalPrice,
            available,
            "imageUrl": image.asset->url,
          }
        `);
        const sanityUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${query}`;

        const response = await fetch(sanityUrl);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result?.message || "Failed to fetch data from Sanity");
        }

        setFoods(result.result || []);
      } catch (err: any) {
        console.error("Error fetching data:", err);
        setError(err.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Render Component
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-xl font-medium text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-xl font-medium text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          
        </h1>
        {foods.length === 0 ? (
          <p className="text-center text-lg font-medium text-gray-500">
            No food items available at the moment.
          </p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foods.map((food) => (
              <li
                key={food._id}
                className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <Link href={`/ourshop/${food._id}`}>
                  <div className="relative h-[300px] w-full bg-gray-100 overflow-hidden group">
                    <img
                      src={food.imageUrl}
                      alt={food.name}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {food.name}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                      {food.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-lg font-medium text-green-600">
                        ${food.price.toFixed(2)}
                      </p>
                      <p className="text-sm line-through text-gray-500">
                        ${food.originalPrice.toFixed(2)}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500">
                      <p>
                        Category:{" "}
                        <span className="font-medium">{food.category}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SanityData;