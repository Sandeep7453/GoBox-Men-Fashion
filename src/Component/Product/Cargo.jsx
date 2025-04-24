import React, { useState } from "react";
import ProductFullData from "./ProductFullData"; // adjust path if needed

const cargoData = [
  {
    id: 1,
    title: "Classic Black Cargo",
    price: 1099,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936665/images_maurtm.jpg",
  },
  {
    id: 2,
    title: "Olive Green Tactical Cargo",
    price: 1199,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936664/images_2_xjlxo2.jpg",
  },
  {
    id: 3,
    title: "Beige Utility Cargo",
    price: 999,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936664/images_1_dizmur.jpg",
  },
  {
    id: 4,
    title: "Urban Grey Cargo",
    price: 1149,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936665/images_5_olusxq.jpg",
  },
  {
    id: 5,
    title: "Camouflage Cargo",
    price: 1249,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936665/images_4_gjtatb.jpg",
  },
  {
    id: 6,
    title: "Slim Fit Black Cargo",
    price: 1099,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936664/images_3_wzxgxr.jpg",
  },
  {
    id: 7,
    title: "Streetwear Cargo",
    price: 1199,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936666/Straight-Leg-Utility-Cargo-Pants-thestreetsofseoul-korean-street-style-minimal-streetwear-k-style-kstyle-mens-affordable-clothing_j4x4la.webp",
  },
  {
    id: 8,
    title: "Navy Blue Cargo",
    price: 999,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936667/download_o2uqqn.jpg",
  },
  {
    id: 9,
    title: "Khaki Combat Cargo",
    price: 1249,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936665/images_maurtm.jpg",
  },
  {
    id: 10,
    title: "Relaxed Fit Cargo",
    price: 1049,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936664/images_1_dizmur.jpg",
  },
  {
    id: 11,
    title: "Double Pocket Cargo",
    price: 1299,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936664/images_2_xjlxo2.jpg",
  },
  {
    id: 12,
    title: "Military Green Cargo",
    price: 1199,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936665/images_5_olusxq.jpg",
  },
  {
    id: 13,
    title: "Stone Grey Cargo",
    price: 1049,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936665/images_4_gjtatb.jpg",
  },
  {
    id: 14,
    title: "Tapered Fit Cargo",
    price: 999,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936664/images_3_wzxgxr.jpg",
  },
  {
    id: 15,
    title: "Desert Brown Cargo",
    price: 1149,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936665/images_maurtm.jpg",
  },
];

const CargoPants = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="pt-24 p-4 text-white bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center">Cargo Pants Collection</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {cargoData.map((item) => (
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

export default CargoPants;
