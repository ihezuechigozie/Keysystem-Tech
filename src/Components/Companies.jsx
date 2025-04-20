
import React from 'react'
import style from './Companies.module.css'
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function Companies() {
  return (
    <>
    <div className={style.companiesCont}>
      <div className={style.header}>
        <h2 className={style.heading}>
          Compliance Certifications/<br />Standards 
          We Specialize In
        </h2>
        <h2 className={style.subheading}>
          Elevate Your Organization's Security Posture 
          with Our Compliance/Standards Consulting Services
        </h2>
      </div>
      <motion.button 
        className={style.btnBtn}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="#" target="_blank"  rel="norefeerer">       
        Contact Us
        <ArrowRight className={style.iconArrowRight} size={18} /> 
      </a>     
      </motion.button>
  
    </div>
    </>
  )
}

export default Companies