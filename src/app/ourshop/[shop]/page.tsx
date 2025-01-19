"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface ProductDetail {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ShopDetailPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = encodeURIComponent(`
          *[_type == "food" && _id == "${params.shop}"] {
            _id,
            name,
            description,
            price,
            "imageUrl": image.asset->url,
          }
        `);
        const sanityUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${query}`;

        const response = await fetch(sanityUrl);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || "Failed to fetch product details");
        }

        setProduct(data.result[0]); // Assuming result array
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    if (params.shop) {
      fetchProduct();
    }
  }, [params.shop]);

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

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-xl font-medium text-gray-700">Product not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-700 my-2">{product.description}</p>
      <p className="text-green-600 font-semibold my-2">
        Price: ${product.price.toFixed(2)}
      </p>
      <Image
        src={product.imageUrl}
        alt={product.name}
        className="w-full max-w-md rounded shadow"
      />
    </div>
  );
};

export default ShopDetailPage;
