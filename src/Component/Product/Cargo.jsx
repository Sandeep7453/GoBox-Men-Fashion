import React from "react";

const cargoData = [
  {
    id: 1,
    title: "Classic Black Cargo",
    price: 1099,
    image: "https://source.unsplash.com/400x400/?black,cargo,pants",
  },
  {
    id: 2,
    title: "Olive Green Tactical Cargo",
    price: 1199,
    image: "https://source.unsplash.com/400x400/?olive,cargo,pants",
  },
  {
    id: 3,
    title: "Beige Utility Cargo",
    price: 999,
    image: "https://source.unsplash.com/400x400/?beige,cargo,pants",
  },
  {
    id: 4,
    title: "Urban Grey Cargo",
    price: 1149,
    image: "https://source.unsplash.com/400x400/?grey,cargo,pants",
  },
  {
    id: 5,
    title: "Camouflage Cargo",
    price: 1249,
    image: "https://source.unsplash.com/400x400/?camouflage,cargo,pants",
  },
  {
    id: 6,
    title: "Slim Fit Black Cargo",
    price: 1099,
    image: "https://source.unsplash.com/400x400/?slimfit,cargo,pants",
  },
  {
    id: 7,
    title: "Streetwear Cargo",
    price: 1199,
    image: "https://source.unsplash.com/400x400/?streetwear,cargo,pants",
  },
  {
    id: 8,
    title: "Navy Blue Cargo",
    price: 999,
    image: "https://source.unsplash.com/400x400/?navy,cargo,pants",
  },
  {
    id: 9,
    title: "Khaki Combat Cargo",
    price: 1249,
    image: "https://source.unsplash.com/400x400/?khaki,cargo,pants",
  },
  {
    id: 10,
    title: "Relaxed Fit Cargo",
    price: 1049,
    image: "https://source.unsplash.com/400x400/?relaxed,cargo,pants",
  },
  {
    id: 11,
    title: "Double Pocket Cargo",
    price: 1299,
    image: "https://source.unsplash.com/400x400/?pocket,cargo,pants",
  },
  {
    id: 12,
    title: "Military Green Cargo",
    price: 1199,
    image: "https://source.unsplash.com/400x400/?military,cargo,pants",
  },
  {
    id: 13,
    title: "Stone Grey Cargo",
    price: 1049,
    image: "https://source.unsplash.com/400x400/?stone,cargo,pants",
  },
  {
    id: 14,
    title: "Tapered Fit Cargo",
    price: 999,
    image: "https://source.unsplash.com/400x400/?tapered,cargo,pants",
  },
  {
    id: 15,
    title: "Desert Brown Cargo",
    price: 1149,
    image: "https://source.unsplash.com/400x400/?desert,cargo,pants",
  },
];

const CargoPants = () => {
  return (
    <div className="pt-24 p-4 text-white bg-gray-900 ">
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

export default CargoPants;
