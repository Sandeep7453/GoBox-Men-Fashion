import React, { useState } from "react";
import ProductFullData from './ProductFullData'; // adjust path if needed

const accessories = [
  {
    id: 1,
    title: "Full Body HIIT",
    duration: "30 min",
    price: 499,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937238/download_gmvv2z.jpg",
  },
  {
    id: 2,
    title: "Core Crusher Workout",
    duration: "15 min",
    price: 399,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937239/images_1_aen4ih.jpg",
  },
  {
    id: 3,
    title: "Upper Body Strength",
    duration: "25 min",
    price: 599,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937239/images_2_yr0sn2.jpg",
  },
  {
    id: 4,
    title: "Leg Day Burner",
    duration: "40 min",
    price: 699,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937240/0221f387f7343608e56407a930c8749c_hosmbz.jpg",
  },
  {
    id: 5,
    title: "Mobility & Stretching",
    duration: "20 min",
    price: 299,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937240/images_se09v4.jpg",
  },
  {
    id: 6,
    title: "Morning Yoga Flow",
    duration: "15 min",
    price: 199,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937241/download_1_lxtiyv.jpg",
  },
  {
    id: 7,
    title: "Evening Burn Session",
    duration: "35 min",
    price: 549,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937242/download_2_v86a6v.jpg",
  },
];

const Accessories = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="pt-24 p-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Men Accessories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {accessories.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover rounded-lg cursor-pointer"
              onClick={() => openModal(item)}
            />
            <h3 className="mt-4 font-semibold">{item.title}</h3>
            <p className="text-yellow-400">₹{item.price}</p>
            <button
              className="mt-2 px-4 py-2 bg-yellow-600 rounded-lg hover:bg-yellow-700"
              onClick={() => openModal(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductFullData product={selectedProduct} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Accessories;
