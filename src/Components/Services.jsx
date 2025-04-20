import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import style from './Services.module.css';
import KeysystemLogo from './KeysystemLogo';
import image1 from '../assets/@C.svg';
import image2 from '../assets/IG.svg';
import image3 from '../assets/X.svg';
import image4 from '../assets/linkedIn.svg';
import image5 from '../assets/facebook.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Services() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      if (scrollY > 300 || scrollY + windowHeight >= scrollHeight - 50) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer 
      className={style.servicesCont}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
    <div className={style.gridCont}>
    <div className={style.gridBox}>
        <div className={style.logoCont}>
          <KeysystemLogo />
          <li>
            <img className={style.copyright} src={image1} alt="copyright" />
            2025 KeySystem Technology Limited. All rights reserved.
          </li>
        </div>

        <div>
          <strong>Services</strong>
          <li>Core refresh</li>
          <li>Application management services</li>
          <li>Evolution & enhancement services</li>
          <li>Solution Assurance & validation</li>
          <li>Digital Banking & financial inclusion</li>
          <li>Online/mobile lending solution</li>
        </div>

        <div>
          <li>Staff augmentation solutions</li>
          <li>Risk management & Internal audit solutions</li>
          <li>Data Warehouse & Business Intelligence (BI)</li>
          <li>Enterprise Document Management Solutions</li>
          <li>KeySystem software testing</li>
          <li>Cybersecurity Solutions</li>
        </div>
      </div>
      <div className={style.gridBox}>
        <div>
          <strong>QUICK LINKS</strong>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Sitemap</a></li>
        </div>

        <div>
          <strong>Contact</strong>
          <li><strong>Nigeria</strong></li>
          <li>55G Adebisi Omotola Close, Off Samuel Adedoyin Street, Victoria Island</li>
        </div>

        <div>
          <li><strong>United Kingdom</strong></li>
          <li>39 Kenyon Lane, Off Moston Lane, Moston, Manchester, UK, M40 9JG</li>
        </div>
      </div>

      <div className={style.gridBox}>
        <div>
          <li><strong>United Kingdom</strong></li>
          <li>Tel: +44 161 948 1444</li>
        </div>
        <div>
          <li><strong>United Arab Emirates</strong></li>
          <li>Tel: +971 50 423 8817</li>
        </div>
        <div>
          <li><strong>Canada</strong></li>
          <li>Tel: +1 647 977 1435</li>
        </div>
      </div>

      <div className={style.gridBox}>
        <div className={style.socialIcons}>
          <img src={image2} alt="Instagram" />
          <img src={image3} alt="Twitter X" />
          <img src={image4} alt="LinkedIn" />
          <img src={image5} alt="Facebook" />
        </div>

        <div>
          <li><strong>Nigeria</strong></li>
          <li>Tel: +234 818 444 1404</li>
        </div>

        <div>
          <li><strong>Email</strong></li>
          <li><a href="mailto:enquiries@keysystemltd.com">enquiries@keysystemltd.com</a></li>
        </div>
      </div>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={style.scrollTopButton}
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
      
    </motion.footer>
  );
}

export default Services;
