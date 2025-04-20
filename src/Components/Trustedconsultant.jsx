import React from 'react';
import { motion } from 'framer-motion';
import style from './Trustedconsultant.module.css';
import groupImage from '../assets/assurance svg.svg';

const Trustedconsultant = () => {
  return (
    <div className={style.genContainer}>
      <div className={style.gridOverlay}></div>
      <div className={style.diamondShapes}>
        <div className={style.diamond1}></div>
        <div className={style.diamond2}></div>
        <div className={style.diamond3}></div>
        <div className={style.diamond4}></div>
        <div className={style.diamond5}></div>
        
        <motion.div 
        className={style.textGroup}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
<div className={style.textContainer}>
<motion.h1 className={style.heading}>Why we are  your Trusted Consultant</motion.h1>

<motion.p 
  className={style.subheading}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
>
 Empowering Businesses with Cutting-edge Technology
</motion.p>

<motion.p 
  className={style.bodyText}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
>
 Excellence isn’t a goal, it’s our DNA; our 
 relentless pursuit of excellence is the driving 
 force behind our success. Excellence is our legacy, 
 and we are proud to carry it forward. 
</motion.p>

<motion.p 
  className={style.cta}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
>
  Watch the video to see how we are innovating 
  to keep businesses on top of their games.
</motion.p>

<div className={style.imageCard}>
  <img className={style.img} src={groupImage} alt="Assurance Visual-image" />
</div>
</div>
</motion.div>


</div>

</div>
  );
};

export default Trustedconsultant;
