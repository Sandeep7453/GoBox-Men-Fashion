import React from "react";

const jeansData = [
  {
    id: 1,
    title: "Classic Blue Denim",
    price: 1199,
    image: "https://source.unsplash.com/400x400/?blue,denim",
  },
  {
    id: 2,
    title: "Ripped Black Jeans",
    price: 1499,
    image: "https://source.unsplash.com/400x400/?ripped,jeans",
  },
  {
    id: 3,
    title: "Grey Skinny Fit Jeans",
    price: 1399,
    image: "https://source.unsplash.com/400x400/?grey,jeans",
  },
  {
    id: 4,
    title: "Washed Blue Denim",
    price: 1299,
    image: "https://source.unsplash.com/400x400/?washed,denim",
  },
  {
    id: 5,
    title: "Baggy Street Jeans",
    price: 1699,
    image: "https://source.unsplash.com/400x400/?baggy,jeans",
  },
  {
    id: 6,
    title: "Vintage Look Jeans",
    price: 1599,
    image: "https://source.unsplash.com/400x400/?vintage,jeans",
  },
  {
    id: 7,
    title: "Dark Navy Slim Fit",
    price: 1349,
    image: "https://source.unsplash.com/400x400/?dark,jeans",
  },
  {
    id: 8,
    title: "Distressed Blue Denim",
    price: 1499,
    image: "https://source.unsplash.com/400x400/?distressed,jeans",
  },
  {
    id: 9,
    title: "Acid Wash Denim",
    price: 1549,
    image: "https://source.unsplash.com/400x400/?acid,denim",
  },
  {
    id: 10,
    title: "Skinny Fit Black Jeans",
    price: 1399,
    image: "https://source.unsplash.com/400x400/?black,jeans",
  },
  {
    id: 11,
    title: "Patchwork Style Jeans",
    price: 1799,
    image: "https://source.unsplash.com/400x400/?patchwork,jeans",
  },
  {
    id: 12,
    title: "Tapered Fit Light Blue",
    price: 1299,
    image: "https://source.unsplash.com/400x400/?tapered,jeans",
  },
  {
    id: 13,
    title: "Grunge Style Jeans",
    price: 1499,
    image: "https://source.unsplash.com/400x400/?grunge,jeans",
  },
  {
    id: 14,
    title: "Loose Fit Denim",
    price: 1399,
    image: "https://source.unsplash.com/400x400/?loose,jeans",
  },
  {
    id: 15,
    title: "Urban Blue Denim",
    price: 1449,
    image: "https://source.unsplash.com/400x400/?urban,jeans",
  },
];

const DenimJeans = () => {
  return (
    <div className="pt-24 p-4 text-white bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center">Denim Jeans Collection</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {jeansData.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover rounded-lg"
            />
            <h3 className="mt-4font-semibold">{item.title}</h3>
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

export default DenimJeans;
