import React, { useState } from "react";
import ProductFullData from "./ProductFullData"; 

const jeansData = [
  {
    id: 1,
    title: "Classic Blue Denim",
    price: 1199,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743935741/H49f5580bff4d4ffdbb8fddd959678c21S.jpg_720x720q50_m06djw.avif",
  },
  {
    id: 2,
    title: "Ripped Black Jeans",
    price: 1499,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743935742/images_1_dscoiy.jpg",
  },
  {
    id: 3,
    title: "Grey Skinny Fit Jeans",
    price: 1399,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743935744/images_t4xhr0.jpg",
  },
  {
    id: 4,
    title: "Washed Blue Denim",
    price: 1299,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743935745/40cbc818-1952-4ee5-83fa-36eaeb2391f6_ncm7ch.webp",
  },
  {
    id: 5,
    title: "Baggy Street Jeans",
    price: 1699,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743935746/99e1cba8-d12f-4788-af3e-ddbff60c8d23_daslyk.webp",
  },
  {
    id: 6,
    title: "Vintage Look Jeans",
    price: 1599,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743935742/images_3_ka00dy.jpg",
  },
  {
    id: 7,
    title: "Dark Navy Slim Fit",
    price: 1349,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743935747/b30a4f2b-d0e0-4e8e-b4ad-8006c9db9c6f_qbz9xd.webp",
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
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

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
            <h3 className="mt-4 font-semibold">{item.title}</h3>
            <p className="text-yellow-400">₹{item.price}</p>
            <button
              onClick={() => handleOpenModal(item)}
              className="mt-2 px-4 py-2 bg-yellow-600 rounded-lg hover:bg-yellow-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-white text-black rounded-lg p-6 w-11/12 max-w-md relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              ×
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">{selectedItem.title}</h3>
            <p className="text-yellow-600 font-semibold text-lg">₹{selectedItem.price}</p>
            <button
              onClick={handleCloseModal}
              className="mt-4 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DenimJeans;
