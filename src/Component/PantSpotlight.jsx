import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const PantSpotlight = ({ title, data }) => {
  return (  
    <div className="relative z-0 h-full w-full bg-transparent py-4">
      <h2 className="md:text-5xl text-4xl font-serif text-center  px-5 bg-gradient-to-r from-blue-200 to-cyan-700 text-transparent bg-clip-text py-5">
        {title}
      </h2>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        initialSlide={5}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2,
          slideShadows: true,
          
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-6xl mx-auto"
      > 
      
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{ width: '300px' }}
            className="bg-gray-900 text-white rounded-lg shadow-lg p-2 flex flex-col justify-center items-center h-fit"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72 object-cover rounded-md mb-2"
            />
            <h3 className="text-2xl font-serif">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.tagline}</p>
            <p className="text-sm text-gray-400 italic">{item.fabric}</p>
          </SwiperSlide>
          
        ))}
      </Swiper>
      <hr className="w-[80vw] h-[0.5px] my-5 bg-gray-600 border-none mx-auto" />
    </div>
  );
};

export default PantSpotlight;
