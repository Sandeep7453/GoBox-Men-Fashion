import React from "react";

const hoodieData = [
  {
    id: 1,
    title: "Classic Black Hoodie",
    price: 1299,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743933402/34_3a833566-9262-4ea6-b93f-e2e9f1eb8f15_rov5yw.webp",
  },
  {
    id: 2,
    title: "Grey Zip Hoodie",
    price: 1499,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743933402/972c93e53d3bca08416a4b20636def7f_dwncdy.jpg",
  },
  {
    id: 3,
    title: "Streetwear Red Hoodie",
    price: 1399,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743933403/rb_votfne.webp",
  },
  {
    id: 4,
    title: "Oversized Blue Hoodie",
    price: 1599,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743933403/blog-article-image-how-to-style-mens-oversized-hoodies-for-a-streetwear-look_zr0z4e.webp",
  },
  {
    id: 5,
    title: "Minimal Beige Hoodie",
    price: 1449,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743933402/65a80e7847883a30c3276f39-niepce-inc-streetwear-men-39-s_ew33rb.jpg",
  },
  {
    id: 6,
    title: "Urban White Hoodie",
    price: 1349,
    image: "https://source.unsplash.com/400x400/?white,hoodie",
  },
  {
    id: 7,
    title: "Army Green Hoodie",
    price: 1549,
    image: "https://source.unsplash.com/400x400/?green,hoodie",
  },
  {
    id: 8,
    title: "Abstract Print Hoodie",
    price: 1699,
    image: "https://source.unsplash.com/400x400/?pattern,hoodie",
  },
  {
    id: 9,
    title: "Zip-Up Black Hoodie",
    price: 1399,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743933402/34_3a833566-9262-4ea6-b93f-e2e9f1eb8f15_rov5yw.webp",
  },
  {
    id: 10,
    title: "Sports Grey Hoodie",
    price: 1299,
    image: "https://source.unsplash.com/400x400/?sport,hoodie",
  },
  {
    id: 11,
    title: "Winter Fleece Hoodie",
    price: 1899,
    image: "https://source.unsplash.com/400x400/?fleece,hoodie",
  },
  {
    id: 12,
    title: "Anime Print Hoodie",
    price: 1499,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743933402/34_3a833566-9262-4ea6-b93f-e2e9f1eb8f15_rov5yw.webp",
  },
  {
    id: 13,
    title: "Techwear Hoodie",
    price: 1749,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743933402/972c93e53d3bca08416a4b20636def7f_dwncdy.jpg",
  },
  {
    id: 14,
    title: "Vintage Brown Hoodie",
    price: 1399,
    image: "https://source.unsplash.com/400x400/?vintage,hoodie",
  },
  {
    id: 15,
    title: "Graphic Street Hoodie",
    price: 1599,
    image: "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743933402/972c93e53d3bca08416a4b20636def7f_dwncdy.jpg",
  },
];

const Hoodie = () => {
  return (
    <div className="pt-24 p-4 text-white bg-gray-900 ">
      <h2 className="text-3xl font-bold mb-6 text-center">Hoodies Collection</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {hoodieData.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover rounded-lg"
            />
            <h3 className="mt-4  font-semibold">{item.title}</h3>
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

export default Hoodie;
