import React, { useState } from "react";
import { motion } from "framer-motion";
import pumaimage from "../Component/Data/Images/Puma.jpg";

const LeftGrid = [
  {
    title: "Printed Tshirt",
    description: "Light and breezy wear for hot summers.",
    images: [
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932279/58cf4e967460de450ed757d6dcae609c_m2ja4i.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932280/61DajIkU2OL._AC_UY1100__jrprlp.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932280/71_2CJVAiZL._AC_UY1100__e4nq9y.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932280/71-T8rFye8L._AC_UY1100__gl7yyl.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932280/71WqlOm7NIL._AC_UY350__qtwz9c.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932281/91RyLU804UL._AC_UY1100__luommx.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932282/7168RjRsy9L._AC_UY1100__fblelx.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932283/1687773145847-ane-01-originnm80prcnt-500x500_appmll.webp",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743944227/hoodie-9_giwhpe.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932284/dafc82eb-cc7b-4426-a1e2-3e137909e4031735973939947-Bewakoof-Grey-Eternity-Graphic-Printed-Oversized-T-shirt-993-1_tfpgq4.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932285/ebf5b23890a11de4f3ce59cafd3f43b2_do8scr.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743932286/preview-trending-naruto-anime-oversize-t-shirt-print-design-for-free-with-source-files-1698490870_yjvtmw.webp",
    ],
  },
  {
    title: "Hoodie",
    description: "Stay warm and stylish in this insulated jacket.",
    images: [
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743933402/34_3a833566-9262-4ea6-b93f-e2e9f1eb8f15_rov5yw.webp",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743933402/972c93e53d3bca08416a4b20636def7f_dwncdy.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743933403/rb_votfne.webp",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743933403/blog-article-image-how-to-style-mens-oversized-hoodies-for-a-streetwear-look_zr0z4e.webp",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743933402/65a80e7847883a30c3276f39-niepce-inc-streetwear-men-39-s_ew33rb.jpg",
    ],
  },
  {
    title: "Denim Jeans",
    description: "Classic blue jeans for everyday wear.",
    images: [
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743935741/H49f5580bff4d4ffdbb8fddd959678c21S.jpg_720x720q50_m06djw.avif",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743935742/images_1_dscoiy.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743935744/images_t4xhr0.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743935745/40cbc818-1952-4ee5-83fa-36eaeb2391f6_ncm7ch.webp",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743935746/99e1cba8-d12f-4788-af3e-ddbff60c8d23_daslyk.webp",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743935742/images_3_ka00dy.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743935747/b30a4f2b-d0e0-4e8e-b4ad-8006c9db9c6f_qbz9xd.webp"
    ],
  }
  ,
  {
    title: "TechWear Jackets",
    description: "Durable and stylish boots for winter days.",
    images: [
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936120/images_1_skifz4.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936120/images_2_lakqbx.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936121/images_u0ubdq.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936123/product-image-1668565116_hqc6t7.webp",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936124/71NPKU-YIdL._AC_UY1100__skc8kk.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936127/ef35e3b1-0cbd-4d64-a939-acfefc40a974_zw3pkq.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936128/il_794xN.4975945524_37rd_0b2287ae-983d-4f7a-a3f2-b797fbadb60d_cnt85o.webp"
    ],
  }
  ,
  {
    title: "Oversized Tshirt",
    description: "Soft cotton tee perfect for daily outfits.",
    images: [
        "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936959/download_1_c0505v.jpg",
        "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936959/download_mozqpe.jpg",
        "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936959/download_2_yrdgsi.jpg",
        "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936959/download_1_iu1g0m.webp",
        "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936960/images_x9okfm.jpg",
        "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936960/download_x1p0mo.webp",
        "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936961/men-s-black-hangin-astronaut-graphic-printed-oversized-t-shirt-504166-1741325888-1_jrpfbo.webp",
        "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936962/prd_3649381-MuscleBlaze-Carnage-Oversized-Tshirt-Charcoal-XLarge_o_r3q9zc.webp",
        "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936962/Rings_of_life_xx9njz.webp",
        "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936963/204c23a5d93050abe126488c313cd7ad_h7vpal.jpg",
        "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936963/ArticBlue_ARCOversized_4_xrggd8.webp"
    ]
}
,
  {
    title: "Cargo Pants",
    description: "Cozy and trendy hoodie for relaxed vibes.",
    images: [
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936665/images_maurtm.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936664/images_2_xjlxo2.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936664/images_1_dizmur.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936665/images_5_olusxq.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936665/images_4_gjtatb.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936664/images_3_wzxgxr.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936666/Straight-Leg-Utility-Cargo-Pants-thestreetsofseoul-korean-street-style-minimal-streetwear-k-style-kstyle-mens-affordable-clothing_j4x4la.webp",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743936667/download_o2uqqn.jpg"
    ]
  }
  ,
  {
    title: "Accessories",
    description: "Traditional yet modern kurta for festive occasions.",
    images: [
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937238/download_gmvv2z.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937239/images_1_aen4ih.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937239/images_2_yr0sn2.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937240/0221f387f7343608e56407a930c8749c_hosmbz.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937240/images_se09v4.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937241/download_1_lxtiyv.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937242/download_2_v86a6v.jpg"
    ]
  }
  ,
  {
    title: "Sneakers",
    description: "Minimalist sneakers to complete any look.",
    images: [
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937556/shopping_1_wtun7y.avif",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937555/images_xc0zo3.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937554/images_7_myn753.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937553/images_6_vnj3pe.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937551/images_5_bepkpr.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937544/images_3_sq9fvi.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937545/images_4_yaj88q.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937516/images_2_fcqukp.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937515/images_1_fksgeg.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937512/download_wsoso6.jpg",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937511/shopping_i79gpq.avif",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937510/shopping_7_rohxlw.avif",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937509/shopping_6_ybwwjq.avif",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937508/shopping_5_w7ukuj.avif",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937508/shopping_4_qpzkep.avif",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937507/shopping_3_eoxnj0.avif",
      "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743937507/shopping_2_ugxptd.avif"
    ]
  }
  ,
  {
    title: "Formal Coat",
    description: "Elegant coat to elevate your office outfit.",
    images: [],
  },
  {
    title: "Baseball Cap",
    description: "Cool and casual cap for sunny days.",
    images: [],
  },
];

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="flex flex-col h-[80vh] md:flex-row bg-gray-700 w-full md:w-[80vw] rounded-2xl p-4 md:p-5 overflow-hidden">
      {/* Left Section */}
      <div className=" md:w-[30%] w-full  md:h-full overflow-x-auto md:overflow-y-auto flex md:flex-col gap-3 bg-gray-800 p-4 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none mb-4 md:mb-0">
        <h2 className="text-xl font-bold text-white md:block hidden">Fashion Items</h2>
        <div className="flex md:flex-col gap-3 min-w-max ">
          {LeftGrid.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer p-3 bg-gray-600 rounded-lg shadow hover:bg-gray-500 min-w-[140px] md:min-w-0"
              onClick={() => setSelectedCard(item)}
            >
              {item.images.length > 0 && (
                <img
                  src={item.images[0]}
                  alt=""
                  className="h-24 md:h-36 w-full object-cover object-center rounded-md mb-1"
                />
              )}
              <h3 className="font-serif md:text-xl text-sm text-white text-center">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-[70%] w-full h-[50vh] md:h-full overflow-y-auto flex flex-wrap justify-center items-start gap-4 p-4 bg-gray-900 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
        {selectedCard ? (
          selectedCard.images && selectedCard.images.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-4">
              {selectedCard.images.map((image, index) => (
                <div key={index} className="w-[45%] sm:w-[30%] md:w-[30%] lg:w-[20%] p-2">
                  <motion.img
                    whileHover={{ scale: 1.03, opacity: 0.5 }}
                    whileTap={{ scale: 0.97 }}
                    src={image}
                    alt=""
                    className="w-full h-56 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-white text-center w-full">
              <p className="text-xl mb-4">No images found for {selectedCard.title}</p>
              <img src={pumaimage} alt="" className="h-40 mx-auto rounded-lg" />
            </div>
          )
        ) : (
          <div className="text-white text-center w-full">
            <p className="text-xl mb-4">Select a fashion item to view images</p>
            <motion.img src={pumaimage} alt="" className="mx-auto rounded-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
