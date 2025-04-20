import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import KeysystemLogo from "./KeysystemLogo";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowNav(false); 
      } else {
        setShowNav(true); 
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  const navVariants = {
    hidden: { y: "-100%" },
    visible: { y: "0%" },
  };

  return (
    <header>
      <motion.nav
        variants={navVariants}
        animate={showNav ? "visible" : "hidden"}
        initial="visible"
        transition={{ duration: 0.4 }}
        className={style.navBar}
        aria-label="Main Navigation"
      >
        <div className={style.navHolder}>
       
        <a href="#" className={style.logoAnchorTag} target="_blank" title="KeySysten Technology" rel="noreferrer"> 
          <KeysystemLogo />
        </a>
        
          <ul className={`${style.navList} ${menuOpen ? style.active : ""}`}>
            <li>
              <a
                href="/"
                className={isActive('/') ? style.activeLink : ""}
                aria-current={isActive('/') ? "page" : undefined}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={isActive('/about') ? style.activeLink : ""}
                aria-current={isActive('/about') ? "page" : undefined}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className={isActive('/services') ? style.activeLink : ""}
                aria-current={isActive('/services') ? "page" : undefined}
              >
                Services <FontAwesomeIcon className={style.faChevronDown} icon={faChevronDown} />
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={isActive('/contact') ? style.activeLink : ""}
                aria-current={isActive('/contact') ? "page" : undefined}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className={style.menuWithBtn}>
          <div
            className={style.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setMenuOpen(!menuOpen)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <motion.button 
            className={style.navButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faPhone} />
             <a href="tel:+234 818 444 1404" target="_blank" title="Contact This Number" rel="noreferrer"> 
               +234 818 444 1404
            </a>
          </motion.button>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
