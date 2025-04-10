import React from 'react'
import { motion } from 'framer-motion'

const HSection = () => {
  return (
    <div className='h-fit w-full bg-gradient-to-r from-slate-600 to-slate-900 mt-10 flex justify-center flex-col text-center py-10'>
      
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
        // viewport={{ once: true, amount: 0.3 }}
        className='md:text-6xl text-2xl font-serif bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text py-2'
      >
        Favourite Selling Fast
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        // viewport={{ once: true, amount: 0.3 }}
        className='text-2xl md:text-4xl'
      >
        upto <span className='text-4xl mx-1 md:text-6xl'>30%</span> Off
      </motion.h1>





    </div>
  )
}
export default HSection
