import React from 'react';
import { motion } from 'framer-motion';
import style from './Products.module.css';
import cusor from '../assets/cusor.svg';
import { ArrowRight } from 'lucide-react';

function Products() {
  return (
    <>
      <motion.div
        className={style.productspage}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className={style.ourProduct}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <motion.div
            className={style.heading}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Our Offerings
          </motion.div>

          <motion.div
            className={style.subHeading}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Leverage KeySystem’s cutting-edge expertise to
            transform your business. Our tailored software and
            cybersecurity solutions drive efficiency, security,
            and growth. We empower businesses to thrive in the digital age
          </motion.div>

          <motion.button
            className={style.productbtn}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }} 
          >
            Learn more
            <ArrowRight className={style.iconArrowRight} size={18} />
          </motion.button>

        </motion.div>

        <motion.div
          className={style.servicesDiv}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
         
          <motion.div className={style.servicesbtn1}>
            <motion.h4
              className={style.spanbtn1}
              variants={fadeInVariant}
            >
              Core banking <br />  services <br />
              <img src={cusor} alt="cusor-icon" />
            </motion.h4>
            <motion.h4
              className={style.spanbtn2}
              variants={fadeInVariant}
            >
              Staff augmentation solutions <br />
              <img src={cusor} alt="cusor-icon" />
            </motion.h4>
            <motion.h4
              className={style.spanbtn3}
              variants={fadeInVariant}
            >
              Business <br /> Intelligence <br />
              <img src={cusor} alt="cusor-icon" />
            </motion.h4>
          </motion.div>

         
          <motion.div className={style.servicesbtn2}>
            <motion.h4
              className={style.spanbtn4}
              variants={fadeInVariant}
            >
              Digital Banking & financial inclusion <br />
              <img src={cusor} alt="cusor-icon" />
            </motion.h4>
            <motion.h4
              className={style.spanbtn5}
              variants={fadeInVariant}
            >
              Internal audit <br /> solutions <br />
              <img src={cusor} alt="cusor-icon" />
            </motion.h4>
            <motion.h4
              className={style.spanbtn6}
              variants={fadeInVariant}
            >
              KeySystem <br /> software testing <br />
              <img src={cusor} alt="cusor-icon" />
            </motion.h4>
          </motion.div>
          
          <motion.div className={style.servicesbtn3}>
            <motion.h4
              className={style.spanbtn7}
              variants={fadeInVariant}
            >
              Online/mobile <br /> lending solution <br />
              <img src={cusor} alt="cusor-icon" />
            </motion.h4>
            <motion.h4
              className={style.spanbtn8}
              variants={fadeInVariant}
            >
              Data Warehouse <br />
              <img src={cusor} alt="cusor-icon" />
            </motion.h4>
            <motion.h4
              className={style.spanbtn9}
              variants={fadeInVariant}
            >
              Cybersecurity <br /> Solutions <br />
              <img src={cusor} alt="cusor-icon" />
            </motion.h4>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Products;

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};
