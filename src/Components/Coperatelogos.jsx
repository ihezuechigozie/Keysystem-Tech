import React from 'react'
import { motion } from 'framer-motion'
import style from './Companies.module.css'
import logo1 from '../assets/i1.svg'
import logo2 from '../assets/i2.svg'
import logo3 from '../assets/i3.svg'
import logo4 from '../assets/i4.svg'
import logo5 from '../assets/i5.svg'
import logo6 from '../assets/i6.svg'
import logo7 from '../assets/i7.svg'
import logo8 from '../assets/i8.svg'
import logo9 from '../assets/i9.svg'
import logo10 from '../assets/i10.svg'
import logo11 from '../assets/i11.svg'
import logo12 from '../assets/i12.svg'
import logo13 from '../assets/i13.svg'
import logo14 from '../assets/i14.svg'
import logo15 from '../assets/i15.svg'
import logo16 from '../assets/i16.svg'
import logo17 from '../assets/i17.svg'
import logo18 from '../assets/i18.svg'

function Coperatelogos() {
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
    logo13, logo14, logo15, logo16, logo17, logo18,
  ]

  return (
    <div className={style.logoDiv}>
      <motion.div
        className={style.gridBox}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {logos.map((logo, index) => (
          <motion.img
            key={index}
            className={style.logoImage}
            src={logo}
            alt={`Logo ${index + 1}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: 'easeOut'
            }}
            viewport={{ once: true }}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default Coperatelogos
