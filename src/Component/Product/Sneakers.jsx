import React from 'react';

// Sneakers Data (JSON structure)
const sneakersData = [
  {
    "id": 1,
    "name": "Tech Sneaker X1",
    "imageUrl": "https://res.cloudinary.com/your-cloud-name/image/upload/f_auto/sneaker-x1.jpg",
    "description": "High-performance sneakers designed for comfort and durability with a futuristic look.",
    "price": 149.99
  },
  {
    "id": 2,
    "name": "Urban Tech Sneaker",
    "imageUrl": "https://res.cloudinary.com/your-cloud-name/image/upload/f_auto/urban-tech-sneaker.jpg",
    "description": "Stylish sneakers ideal for both casual and sporty looks, with high-quality materials.",
    "price": 129.99
  },
  {
    "id": 3,
    "name": "Hyper Speed Sneaker",
    "imageUrl": "https://res.cloudinary.com/your-cloud-name/image/upload/f_auto/hyper-speed-sneaker.jpg",
    "description": "A sneaker that combines advanced technology with extreme comfort for all-day wear.",
    "price": 179.99
  },
  {
    "id": 4,
    "name": "Street Pulse Sneaker",
    "imageUrl": "https://res.cloudinary.com/your-cloud-name/image/upload/f_auto/street-pulse-sneaker.jpg",
    "description": "A stylish sneaker with enhanced grip and support, perfect for street sports and casual wear.",
    "price": 139.99
  }
];

const Sneakers  = () => {
    return (
      <div className="pt-24 p-4 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Sneaker Collection</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {sneakersData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover rounded-lg"
              />
              <h3 className="mt-4   font-semibold">{item.title}</h3>
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
  
  export default Sneakers;
