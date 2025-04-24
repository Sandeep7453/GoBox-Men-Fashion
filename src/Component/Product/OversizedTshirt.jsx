
import React, { useState } from "react";
import ProductFullData from "./ProductFullData"; // Same modal component used in PrintedTshirt

const oversizedData = [

  
  {
    id: 1,
    title: "Oversized Black T-shirt",
    price: 799,
    image:    "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932286/preview-trending-naruto-anime-oversize-t-shirt-print-design-for-free-with-source-files-1698490870_yjvtmw.webp",
  },
  {
    id: 2,
    title: "Streetwear White Tee",
    price: 749,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932285/ebf5b23890a11de4f3ce59cafd3f43b2_do8scr.jpg",
  },
  {
    id: 3,
    title: "Printed Oversized Tee",
    price: 899,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932284/dafc82eb-cc7b-4426-a1e2-3e137909e4031735973939947-Bewakoof-Grey-Eternity-Graphic-Printed-Oversized-T-shirt-993-1_tfpgq4.jpg",
  },
  {
    id: 4,
    title: "Retro Vibe Tee",
    price: 999,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932283/1687773145847-ane-01-originnm80prcnt-500x500_appmll.webp",
  },
  {
    id: 5,
    title: "Graphic Street Tee",
    price: 899,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932282/7168RjRsy9L._AC_UY1100__fblelx.jpg",
  },
  {
    id: 6,
    title: "Washed Look Oversized",
    price: 849,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932281/91RyLU804UL._AC_UY1100__luommx.jpg",
  },
  {
    id: 7,
    title: "Drop Shoulder T-shirt",
    price: 799,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932280/71WqlOm7NIL._AC_UY350__qtwz9c.jpg",
  },
  {
    id: 8,
    title: "Plain Beige Oversized Tee",
    price: 749,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932280/71-T8rFye8L._AC_UY1100__gl7yyl.jpg",
  },
  {
    id: 9,
    title: "Oversized Anime Tee",
    price: 999,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932280/71_2CJVAiZL._AC_UY1100__e4nq9y.jpg",
  },
  {
    id: 10,
    title: "Urban Black Tee",
    price: 849,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932280/61DajIkU2OL._AC_UY1100__jrprlp.jpg",
  },
  {
    id: 11,
    title: "Skater Style Tee",
    price: 899,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932279/58cf4e967460de450ed757d6dcae609c_m2ja4i.jpg",
  },
  {
    id: 12,
    title: "Tie-Dye Oversized",
    price: 999,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743944227/hoodie-9_giwhpe.jpg",
  },
  {
    id: 13,
    title: "Oversized Navy Blue Tee",
    price: 799,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932280/71-T8rFye8L._AC_UY1100__gl7yyl.jpg",
  },
  {
    id: 14,
    title: "Vintage Look Oversized",
    price: 949,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932280/71-T8rFye8L._AC_UY1100__gl7yyl.jpg",
  },
  {
    id: 15,
    title: "Oversized Text Print Tee",
    price: 899,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932281/91RyLU804UL._AC_UY1100__luommx.jpg",
  },
];

const OversizedTshirt = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // Modal product state

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

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
              className="w-full h-60 object-cover rounded-lg mb-4 cursor-pointer transition-transform duration-300 transform hover:scale-105"
              onClick={() => openModal(item)} // Image click opens modal
            />
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-yellow-400">₹{item.price}</p>
            <button
              className="mt-2 px-4 py-2 bg-yellow-600 rounded-lg hover:bg-yellow-700 w-full sm:w-auto"
              onClick={() => openModal(item)} // Button click opens modal
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal component */}
      {selectedProduct && (
        <ProductFullData product={selectedProduct} closeModal={closeModal} />
      )}
    </div>
  );
};

export default OversizedTshirt;

