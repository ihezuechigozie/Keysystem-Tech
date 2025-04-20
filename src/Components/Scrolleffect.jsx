import React from 'react'
import style from './Scrolleffect.module.css'
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.svg'
import logo4 from '../assets/logo4.svg'
import logo5 from '../assets/logo5.svg'
import logo6 from '../assets/logo6.svg'
import logo7 from '../assets/logo7.svg'
import logo12 from '../assets/logo12.svg'

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6,
  logo7, logo12
]

function Scrolleffect() {
  return (
    <div className={style.scrollEffect}>
      <div className={style.scrolldiv}>
        {logos.concat(logos).map((logo, index) => (
          <img src={logo} alt={`logo-${index}`} key={index} className={style.logo} />
        ))}
      </div>
    </div>
  )
}

export default Scrolleffect
