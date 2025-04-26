import React, { useState, useEffect } from "react";
import HomeBgImg from "../Images/HomeBgImg.png";
import { motion } from "framer-motion";
import HSection from "./HSection";
import PantSpotlight from "./PantSpotlight";
import { PantData} from "./Data/PantData.js"
import TrustPoints from "./TrustPoints.jsx";
import Footer from "./Footer.jsx";
import Gridlayout from "./Gridlayout.jsx";
import BestSeller from "./BestSeller.jsx"
import { Link } from "react-router";

const Home = () => {

  return (
<motion.div className="bg-gradient-to-r from-slate-900 to-slate-700"> 
      <div className="flex flex-col items-center text-white font-serif pt-10">
        {/* Headings */}
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center text-4xl md:text-6xl text-center w-full mt-10 px-6">
          <motion.h1 initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-700">
            Premium Fashion,
          </motion.h1>
          <motion.h1 initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-700 mt-4 md:mt-0">
            Affordable Prices.
          </motion.h1>
          
        </div>

        {/* Background Image */}
        <motion.img initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} src={HomeBgImg} className="w-[90%] md:w-[70%] lg:w-[50%] max-h-[40rem] object-cover mt-[-3rem] md:mt-[-5rem]" alt="Home Background" />

        {/* Shop Now Button */}
        <motion.button className="mt-[-2rem] md:mt-[-3rem] px-8 py-2 text-lg font-semibold border-2 border-yellow-500 rounded-lg text-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-black transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={() => alert("We are working on it!")}>
          Shop Now
        </motion.button>
       

        <HSection />
        
<div className="flex flex-col md:flex-row">

  <Link to="/oversized-tshirt">
  <img src="https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1744016427/hangover-sale-icon-banners_2-removebg-preview_1_yx6vor.png" alt=""  className="cursor-pointer"/>
  </Link>
  
  <img src="https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1744020171/XXXX-removebg-preview_ow1lys.png" alt=""  className=" cursor-pointer" onClick={()=> alert("We Are Working On it")}/>
</div>
       

        <PantSpotlight title="Refined Bottomwear Essentials" data={PantData}/>

        <Gridlayout/>
        <TrustPoints/>
        
       <motion.div className="hidden md:flex justify-center items-center border-0 rounded-4xl border-gray-900 h-[40vh] mx-5 bg-gray-800 w-[80vw]" >
        <motion.img
        initial={{opacity:0.8, scale:0.7}}
        whileInView={{opacity:1, scale:1.05}}
        transition={{duration0:0.3 , delay:0.1, ease: 'easeInOut'}}
        className=" pb-5 " src="https://res.cloudinary.com/denwy5y4y/image/upload/f_auto/v1743967513/Mens-Category-Landscape-03-removebg-preview_ll4fqi.png" alt="" />
        <motion.div 
         initial={{ opacity: 0, scale: 0.8 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
        >
          
          
        <h1 className="text-8xl mb-5 mr-10 ">M E N</h1>
        <button className="text-2xl  border-4 border-gray-500 rounded-4xl px-6 py-2 cursor-pointer" onClick={()=>alert("we Are Working On it")}>shop Now</button>
        </motion.div>
       
        
       </motion.div>

         <BestSeller/>

        <Footer/>

      </div>
    </motion.div>
  );
};

export default Home;
