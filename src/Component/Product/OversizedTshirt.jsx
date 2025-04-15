import React from "react";

const oversizedData = [
  {
    id: 1,
    title: "Oversized Black T-shirt",
    price: 799,
    image: "https://source.unsplash.com/400x400/?oversized,black,tshirt",
  },
  {
    id: 2,
    title: "Streetwear White Tee",
    price: 749,
    image: "https://source.unsplash.com/400x400/?oversized,white,tshirt",
  },
  {
    id: 3,
    title: "Printed Oversized Tee",
    price: 899,
    image: "https://source.unsplash.com/400x400/?printed,oversized,tshirt",
  },
  {
    id: 4,
    title: "Retro Vibe Tee",
    price: 999,
    image: "https://source.unsplash.com/400x400/?retro,oversized,tshirt",
  },
  {
    id: 5,
    title: "Graphic Street Tee",
    price: 899,
    image: "https://source.unsplash.com/400x400/?graphic,oversized,tshirt",
  },
  {
    id: 6,
    title: "Washed Look Oversized",
    price: 849,
    image: "https://source.unsplash.com/400x400/?washed,oversized,tshirt",
  },
  {
    id: 7,
    title: "Drop Shoulder T-shirt",
    price: 799,
    image: "https://source.unsplash.com/400x400/?drop,shoulder,tshirt",
  },
  {
    id: 8,
    title: "Plain Beige Oversized Tee",
    price: 749,
    image: "https://source.unsplash.com/400x400/?beige,oversized,tshirt",
  },
  {
    id: 9,
    title: "Oversized Anime Tee",
    price: 999,
    image: "https://source.unsplash.com/400x400/?anime,oversized,tshirt",
  },
  {
    id: 10,
    title: "Urban Black Tee",
    price: 849,
    image: "https://source.unsplash.com/400x400/?urban,oversized,tshirt",
  },
  {
    id: 11,
    title: "Skater Style Tee",
    price: 899,
    image: "https://source.unsplash.com/400x400/?skater,oversized,tshirt",
  },
  {
    id: 12,
    title: "Tie-Dye Oversized",
    price: 999,
    image: "https://source.unsplash.com/400x400/?tie-dye,oversized,tshirt",
  },
  {
    id: 13,
    title: "Oversized Navy Blue Tee",
    price: 799,
    image: "https://source.unsplash.com/400x400/?navy,blue,oversized,tshirt",
  },
  {
    id: 14,
    title: "Vintage Look Oversized",
    price: 949,
    image: "https://source.unsplash.com/400x400/?vintage,oversized,tshirt",
  },
  {
    id: 15,
    title: "Oversized Text Print Tee",
    price: 899,
    image: "https://source.unsplash.com/400x400/?textprint,oversized,tshirt",
  },
];

const OversizedTshirt = () => {
  return (
    <div className="pt-24 p-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Oversized T-shirt Collection</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {oversizedData.map((item) => (
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

export default OversizedTshirt;
