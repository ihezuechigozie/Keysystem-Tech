import React from 'react';
import style from './Hero.module.css';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Banner from './Banner';

function Hero() {
  const grayOverlayBoxes = [12, 21,23, 30, 32];

  return (
    <>
     <section>

       <div className={style.heroSection}>
        <div className={style.gridOverlay}>
          {[...Array(100)].map((_, index) => (
            <div  key={index}
            className={`${style.gridBox} ${
              grayOverlayBoxes.includes(index) ? style.highlighted : ''
            }`}>  
            </div>
          ))}
        </div>
       <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
         >
          <div className={style.content}>
            <div className={style.tagline}>Welcome to KeySystem</div>
            <h1 className={style.h1}>
              IT Consulting for <br /> Forward-thinking <br /> Businesses
            </h1>
            <p className={style.p}>Driving Digital Transformation, One Solution at a Time</p>
            <div className={style.buttons}>
            <motion.button 
            className={style.btnPrimary}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#" target="_blank" title="" rel="norefeerer"> 
              Get Started 
              <ArrowRight className={style.iconArrowRight} size={18} />
            </a>
          </motion.button>
          <motion.button 
           className={style.btnSecondary}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
             <a href="#" target="_blank" title="" rel="norefeerer"> 
                Learn More<ArrowRight className={style.iconArrowRight} size={18} />
              </a>
          </motion.button>
            </div>
          </div>
         </motion.div>
         <Banner />
    </div>
    
     </section>
    </>
  );
}

export default Hero;

