import React, { useState } from 'react';
import { useCart } from '../CartContext';

const ProductFullData = ({ product, closeModal }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false); // ✅ show confirmation

  if (!product) return null;

  const handleModalClick = (e) => e.stopPropagation();

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);           // show message
    setTimeout(() => setAdded(false), 1500); // hide after 1.5s
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50" 
      onClick={closeModal}
    >
      <div 
        className="bg-gray-900 p-5 rounded-2xl shadow-2xl w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 relative transform transition-transform duration-300 hover:scale-105"
        onClick={handleModalClick}
      >
        {/* Close button */}
        <button 
          onClick={closeModal} 
          className="absolute top-3 right-3 text-xl font-bold text-white bg-gray-700 px-3 py-1 rounded-full shadow-md hover:bg-red-600 transition"
        >
          ✕
        </button>

        {/* Confirmation message */}
        {added && (
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded shadow-lg text-sm animate-bounce">
            Added to Cart!
          </div>
        )}

        {/* Product Image */}
        <img 
          src={product.image || "https://via.placeholder.com/400x400"} 
          alt={product.title || "Product Image"} 
          className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-xl mb-4 border-2 border-gray-700"
        />

        {/* Product Title */}
        <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>

        {/* Product Price */}
        <p className="text-yellow-400 text-lg font-semibold mb-2">₹{product.price}</p>

        {/* Product Description */}
        <p className="text-gray-300 mb-4">{product.description}</p>

        {/* Add to Cart Button */}
        <button 
          className="w-full py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-bold shadow-lg hover:scale-105 transition transform"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductFullData;
