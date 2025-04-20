import React from 'react'
import style from './Partners.module.css'
import image1 from '../assets/frame1.svg'
import image2 from '../assets/frame2.svg'
import image3 from '../assets/frame3.svg'
import image4 from '../assets/frame4.svg'
import image5 from '../assets/frame5.svg'

function Partners() {
  return (
    <>
      <div className={style.partnersDiv}>
        <div className={style.textDiv}>
        <div className={style.heading}>
         Our Partners
         </div>
         <div className={style.subHeading}>
         Creating a Synergy with global brands
         </div>
        </div>
          <div className={style.partnerLogo}>
              <div className={style.logoDiv}>
                 <img className={style.image} src={image1} alt="Logo-frame1" />
                 <img className={style.image} src={image2} alt="Logo-frame2" />
                 <img className={style.image} src={image3} alt="Logo-frame3" />
                 <img  className={style.image} src={image4} alt="Logo-frame4" />
                 <img  className={style.image} src={image5} alt="Logo-frame5" />
              </div>
          </div>
      </div>
    </>
  )
}

export default Partners