import React from 'react';

const CasualWear = () => {
  const items = [
    {
      id: 1,
      title: "Relaxed Fit Shirt",
      price: 799,
      image: "https://res.cloudinary.com/demo/image/upload/f_auto/casual-shirt1.jpg",
    },
    {
      id: 2,
      title: "Cotton Chinos",
      price: 999,
      image: "https://res.cloudinary.com/demo/image/upload/f_auto/casual-pants1.jpg",
    },
    {
      id: 3,
      title: "Casual Striped Tee",
      price: 599,
      image: "https://res.cloudinary.com/demo/image/upload/f_auto/casual-tee1.jpg",
    },
  ];

  return (
    <div className="pt-24 p-4 text-white bg-gray-900  ">
      <h2 className="text-3xl font-bold mb-6 text-center">Casual Wear Collection</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition">
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

export default CasualWear;
