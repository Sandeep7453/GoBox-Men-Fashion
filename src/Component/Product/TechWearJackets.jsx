import React from "react";

const techwearData = [
  {
    id: 1,
    title: "Urban Black Techwear Jacket",
    price: 2499,
    image:       "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936120/images_1_skifz4.jpg",
  },
  {
    id: 2,
    title: "Camouflage Tech Jacket",
    price: 2599,
    image:       "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936120/images_2_lakqbx.jpg",
  },
  {
    id: 3,
    title: "Reflective Techwear Jacket",
    price: 2799,
    image:"https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936121/images_u0ubdq.jpg",
  },
  {
    id: 4,
    title: "Grey Tactical Techwear",
    price: 2499,
    image:       "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936123/product-image-1668565116_hqc6t7.webp",
  },
  {
    id: 5,
    title: "Urban Street Techwear",
    price: 2699,
    image:   "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936124/71NPKU-YIdL._AC_UY1100__skc8kk.jpg",
  },
  {
    id: 6,
    title: "Tech Jacket with Pockets",
    price: 2599,
    image:"https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936127/ef35e3b1-0cbd-4d64-a939-acfefc40a974_zw3pkq.jpg",
  },
  {
    id: 7,
    title: "Windproof Techwear Jacket",
    price: 2399,
    image:"https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936128/il_794xN.4975945524_37rd_0b2287ae-983d-4f7a-a3f2-b797fbadb60d_cnt85o.webp",
  },
  {
    id: 8,
    title: "Black Military Techwear",
    price: 2499,
    image: "https://source.unsplash.com/400x400/?military,techwear,jacket",
  },
  {
    id: 9,
    title: "Techwear Hoodie Jacket",
    price: 2799,
    image: "https://source.unsplash.com/400x400/?hoodie,techwear,jacket",
  },
  {
    id: 10,
    title: "Weatherproof Techwear Jacket",
    price: 2899,
    image: "https://source.unsplash.com/400x400/?weatherproof,techwear,jacket",
  },
  {
    id: 11,
    title: "Modern Techwear Bomber Jacket",
    price: 2699,
    image: "https://source.unsplash.com/400x400/?bomber,techwear,jacket",
  },
  {
    id: 12,
    title: "Techwear Hybrid Jacket",
    price: 2499,
    image: "https://source.unsplash.com/400x400/?hybrid,techwear,jacket",
  },
  {
    id: 13,
    title: "Cargo Sleeve Techwear",
    price: 2599,
    image: "https://source.unsplash.com/400x400/?cargo,techwear,jacket",
  },
  {
    id: 14,
    title: "Techwear Parka Jacket",
    price: 2899,
    image: "https://source.unsplash.com/400x400/?parka,techwear,jacket",
  },
  {
    id: 15,
    title: "Lightweight Techwear Jacket",
    price: 2399,
    image: "https://source.unsplash.com/400x400/?lightweight,techwear,jacket",
  },
];

const TechwearJackets  = () => {
    return (
      <div className="pt-24 p-4 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">TechWear Collection</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techwearData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover rounded-lg"
              />
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="text-yellow-400">₹{item.price}</p>
              <button className="mt-2 px-4 py-2 bg-yellow-600 rounded-lg hover:bg-yellow-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default  TechwearJackets;
