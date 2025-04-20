import React from 'react';
import { motion } from 'framer-motion';
import style from './Trustedpartners.module.css';
import logo1 from '../assets/l1.svg';
import logo2 from '../assets/l2.svg';
import logo3 from '../assets/l3.svg';
import logo4 from '../assets/l4.svg';
import logo5 from '../assets/l5.svg';
import logo6 from '../assets/l6.svg';
import logo7 from '../assets/l7.svg';
import logo8 from '../assets/l8.svg';
import logo9 from '../assets/l9.svg';
import logo10 from '../assets/l10.svg';
import logo11 from '../assets/l11.svg';

const logoVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

function Trustedpartners() {
  const logos = [
    logo1, logo2, logo3, logo4,
    logo5, logo6, logo7, logo8,
    logo9, logo10, logo11,
  ];

  return (
    <section className={style.trustedPartners}>
      <div className={style.textContainer}>
        <div className={style.headingText}>They Trust Us</div>
        <div className={style.subheadingText}>And so can you</div>
      </div>

      <div className={style.boxContainer}>
        <div className={style.gridBox}>
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`CustomerLogo${index + 1}`}
              className={style.image}
              custom={index}
              variants={logoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trustedpartners;
