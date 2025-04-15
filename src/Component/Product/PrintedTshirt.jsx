import React, { useState } from 'react';
import ProductFullData from './ProductFullData'; // Import the updated modal component

const PrintedTshirt = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // State to store selected product

  const tshirts = [
    {
      id: 1,
      title: "Black Printed Tee",
      price: 599,
      image: "https://link-to-your-cloudinary/black-tee.jpg",
      description: "A stylish black printed tee perfect for any occasion."
    },
    {
      id: 2,
      title: "White Graffiti Tee",
      price: 699,
      image: "https://link-to-your-cloudinary/white-tee.jpg",
      description: "A white graffiti printed tee with a cool urban vibe."
    },
    {
      id: 3,
      title: "Red Graphic Tee",
      price: 799,
      image: "https://link-to-your-cloudinary/red-tee.jpg",
      description: "A bold red graphic tee for a fashionable look."
    },
    {
      id: 4,
      title: "Blue Minimal Tee",
      price: 649,
      image: "https://link-to-your-cloudinary/blue-tee.jpg",
      description: "A simple blue minimalistic tee for everyday wear."
    },
    {
      id: 5,
      title: "Yellow Streetwear Tee",
      price: 749,
      image: "https://link-to-your-cloudinary/yellow-tee.jpg",
      description: "A vibrant yellow streetwear tee with a unique design."
    },
    {
      id: 6,
      title: "Green Typography Tee",
      price: 799,
      image: "https://link-to-your-cloudinary/green-tee.jpg",
      description: "A green tee with bold typography and a modern look."
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product); // Set the clicked product in state
  };

  const closeModal = () => {
    setSelectedProduct(null); // Close the modal by setting selectedProduct to null
  };

  return (
    <div className="pt-24 p-4 text-white bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center">Printed T-Shirts Collection</h2>
      
      {/* Grid layout with responsiveness */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {tshirts.map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover rounded-lg mb-4 cursor-pointer transition-transform duration-300 transform hover:scale-105"
              onClick={() => openModal(item)} // Open modal on image click
            />
            <h3 className=" font-semibold">{item.title}</h3>
            <p className="text-yellow-400">₹{item.price}</p>
            
            {/* Button that adjusts width based on screen size */}
            <button
              className="mt-2 px-4 py-2 bg-yellow-600 rounded-lg hover:bg-yellow-700 w-full sm:w-auto"
              onClick={() => openModal(item)} // Open modal on button click
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* ProductFullData Modal Component - Will be displayed when a product is selected */}
      {selectedProduct && <ProductFullData product={selectedProduct} closeModal={closeModal} />}
    </div>
  );
};

export default PrintedTshirt;
