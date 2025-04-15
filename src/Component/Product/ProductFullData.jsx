import React from 'react';

const ProductFullData = ({ product, closeModal }) => {
  if (!product) return null; // If no product is selected, don't render the modal

  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent click event from propagating to the parent div
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" 
      onClick={closeModal} // Close modal when clicking outside
    >
      <div 
        className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-1/2 md:w-1/3 relative" // Responsive width
        onClick={handleModalClick} // Prevent closing when clicking inside the modal
      >
        {/* Cross Button */}
        <button 
          onClick={closeModal} 
          className="absolute top-2 right-2 text-xl font-bold text-white bg-gray-900 px-4 py-2 rounded-full shadow-md hover:bg-gray-600"
        >
          X
        </button>
        
        {/* Product Image */}
        <img 
          src={product.image || "https://via.placeholder.com/400x400"} 
          alt={product.title || "Product Image"} 
          className="w-full h-60 sm:h-72 md:h-80 object-cover rounded"
        />
        
        {/* Product Title */}
        <h3 className="text-xl font-semibold mt-4">{product.title || "Sample T-Shirt"}</h3>
        
        {/* Product Price */}
        <p className="text-yellow-400">₹{product.price || "500"}</p>
        
        {/* Product Description */}
        <p className="mt-4 text-gray-800">{product.description || "This is a random product description to test the modal."}</p>
        
        {/* Add to Cart Button */}
        <button 
          className="mt-4 w-full bg-yellow-600 text-white py-2 rounded"
          onClick={() => alert('Added to cart!')} // Just a random action for testing
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductFullData;
