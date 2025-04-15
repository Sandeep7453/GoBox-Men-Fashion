import React from "react";

const techwearData = [
  {
    id: 1,
    title: "Urban Black Techwear Jacket",
    price: 2499,
    image: "https://source.unsplash.com/400x400/?techwear,black,jacket",
  },
  {
    id: 2,
    title: "Camouflage Tech Jacket",
    price: 2599,
    image: "https://source.unsplash.com/400x400/?techwear,camouflage,jacket",
  },
  {
    id: 3,
    title: "Reflective Techwear Jacket",
    price: 2799,
    image: "https://source.unsplash.com/400x400/?reflective,techwear,jacket",
  },
  {
    id: 4,
    title: "Grey Tactical Techwear",
    price: 2499,
    image: "https://source.unsplash.com/400x400/?grey,techwear,jacket",
  },
  {
    id: 5,
    title: "Urban Street Techwear",
    price: 2699,
    image: "https://source.unsplash.com/400x400/?streetwear,techwear,jacket",
  },
  {
    id: 6,
    title: "Tech Jacket with Pockets",
    price: 2599,
    image: "https://source.unsplash.com/400x400/?pocket,techwear,jacket",
  },
  {
    id: 7,
    title: "Windproof Techwear Jacket",
    price: 2399,
    image: "https://source.unsplash.com/400x400/?windproof,techwear,jacket",
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
