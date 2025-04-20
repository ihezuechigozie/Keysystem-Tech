
import React from 'react'
import style from './Banner.module.css'
import vector from '../assets/Vector 1.svg';
import image1 from '../assets/key1.png';
import { motion } from 'framer-motion';

function Banner() {
  return (
    <>
     <section className={style.bannerContent}>
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full flex justify-center md:justify-end"
        >
            <img className={style.image1} src={vector} alt="Vector design" /> 
            <img className={style.image2} src={image1} alt="KeySystem visual" />
        </motion.div>
     </section>

    </>
  )
}

export default Banner