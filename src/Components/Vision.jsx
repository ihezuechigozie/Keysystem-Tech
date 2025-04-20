import React from 'react'
import { motion } from 'framer-motion'
import style from './Vision.module.css'
import visionImage from '../assets/vision-icon.svg'
import missionImage from '../assets/mission-icon.svg'

function Vision() {
  return (
    <div className={style.visionPage}>
      <div className={style.container}>
       
        <motion.div 
          className={style.headingdiv}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div className={style.heading1}>
            What we Represent
          </motion.div>

          <motion.div 
            className={style.heading2}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Our relentless pursuit of excellence is the driving force behind our success
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className={style.subHeading}>
            Excellence isn’t a goal, it’s our DNA; our relentless pursuit of excellence
            is the driving force behind our success. Excellence is our legacy, and we 
            are proud to carry it forward. Watch the video to see how we are innovating 
            to keep businesses on top of their games.
          </div>
        </motion.div>

        <div className={style.visionDiv}>
          
        <motion.div 
  className={style.visionWrapper}
  initial={{ opacity: 0, scale: 0.8, y: 50 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <div className={style.vision}>
  <div className={style.ellipse}>
        <div className={style.rectangle}></div>
      </div>
      <img className={style.imageIcon1} src={visionImage} alt="Dart-icon" />
      <div className={style.textDiv}>
        <div className={style.text1}>Our Vision</div>
        <div className={style.text2}>
          To be the trusted partner for businesses seeking 
          to leverage technology to improve decision-making, 
          unlock new opportunities, and achieve transformative growth
        </div>
      </div>
  </div>
  
</motion.div>
    
<motion.div 
  className={style.visionWrapper}
  initial={{ opacity: 0, scale: 0.8, y: 50 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <div className={style.vision}>
    <div className={style.ellipse}>
      <div className={style.rectangle}></div>
    </div>
    <img className={style.imageIcon2} src={missionImage} alt="Lens-icon" />
    <div className={style.textDiv}>
      <div className={style.text1}>Our Mission</div>
      <div className={style.text2}>
        We bridge the gap between technology and business, 
        delivering customized ICT solutions that drive 
        efficiency, growth, and competitive advantage.
      </div>
    </div>
  </div>
</motion.div>
  </div>
 </div>
</div>
  )
}

export default Vision
