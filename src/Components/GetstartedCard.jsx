import React from 'react'
import style from './GetstartedCard.module.css'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react';

function GetstartedCard() {
  return (
    <>
      <div className={style.getStartedCont}>
  <div className={style.getStartedWrapper}>
    <motion.div 
      className={style.getstartedCard}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
       <motion.div
          className={style.firstTextDiv}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className={style.heading}>Ready to get started?</h2>
          <p className={style.subHeading}>Shoot us a Mail</p>
          <p className={style.bodyText1}>
            Join numerous corporations, organizations, 
            and businesses as they scale their teams, 
            tap into new market opportunities and build 
            innovative products with KeySystem Technology.
          </p>
          <p className={style.bodyText2}>
            Join thousands of students who 
            are ready to learn new skills or 
            take their career to the next level 
            by enrolling in one of our training 
            programs today.
          </p>
          <motion.button 
            className={style.getstartedCardBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="" target="_blank" title="Send Email" rel="norefeerer"> 
              Send Us a Mail Now
              <ArrowRight className={style.iconArrowRight} size={18} />
            </a>
          </motion.button>
        </motion.div>

        <motion.div
          className={style.circleDiv}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          <div className={style.circle1}>
            <div className={style.circle2}>
              <div className={style.circle3}>
                <div className={style.circle4}></div>
              </div>
            </div>
          </div>
        </motion.div>
    </motion.div>
  </div>
</div>

    </>
  )
}

export default GetstartedCard