import React, { useState } from 'react';
import ProductFullData from './ProductFullData'; // Import the modal component

const CasualWear = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: 1,
      title: "Relaxed Fit Shirt",
      price: 799,
      image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1745489478/e5bb421e3945044bb7a288aa96f3438f_jueftw.jpg",
      description: "A relaxed fit shirt for a comfortable everyday look.",
    },
    {
      id: 2,
      title: "Cotton Chinos",
      price: 999,
      image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1745489479/8c64b3136c0722dd13949cab4de78abe_pjt2vd.jpg",
      description: "Comfortable and stylish cotton chinos for casual outings.",
    },
    {
      id: 3,
      title: "Casual Striped Tee",
      price: 599,
      image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1745489478/01ffe05061858ace0d4ac401cf95afe4_rxlwo7.jpg",
      description: "A casual striped tee for a laid-back vibe.",
    },
  ];

  const openModal = (item) => {
    setSelectedItem(item); // Set selected item to show in modal
  };

  const closeModal = () => {
    setSelectedItem(null); // Close modal by clearing the selected item
  };

  return (
    <div className="pt-24 p-4 text-white bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center">Casual Wear Collection</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {items.map((item) => (
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
              onClick={() => openModal(item)} // Open modal on button click
              className="mt-2 px-4 py-2 bg-yellow-600 rounded-lg hover:bg-yellow-700"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* ProductFullData Modal Component - Will be displayed when a product is selected */}
      {selectedItem && <ProductFullData product={selectedItem} closeModal={closeModal} />}
    </div>
  );
};

export default CasualWear;
