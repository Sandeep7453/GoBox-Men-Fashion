import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../Component/Css/BestSeller.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Your images
const images = [
    "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743965731/school-of-athens-821473_i8pwqk.webp",
    "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743965731/crane-embroidered-154169_exzpfo.webp",
    "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743965731/crane-embroidered-154169_exzpfo.webp",
    "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743965732/great-indian-womens-oversized-shirt-128108_pltnen.webp",
    "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743965732/great-indian-womens-oversized-shirt-128108_pltnen.webp",
    "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743965732/starry-night-385896_gt4yzh.webp",
    "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743965732/starry-night-385896_gt4yzh.webp",
    "https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743965732/snake-embroidered-544170_dehkvy.webp"
];

export default function App() {
  return (
    <>

    <h1 className='text-2xl md:text-4xl font-serif mt-10'>Our Best Seller </h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((imageUrl, index) => (
          
          <SwiperSlide key={index} >
            <img
              src={imageUrl}
              alt={`Best Seller ${index + 1}`}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
