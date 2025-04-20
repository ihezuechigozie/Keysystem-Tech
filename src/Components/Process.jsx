import React from 'react'
import style from './Process.module.css'
import image1 from '../assets/puzzle.svg'
import image2 from '../assets/handshake.svg'
import image3 from '../assets/check.svg'

function Process() {
  return (
    <>
     <section className={style.processDiv}>
          <div className={style.heading}>Our Process</div>
          <div className={style.subHeading}>
            At KeySystem, we leave you with a lasting impression
          </div>
       
        <div className={style.boxDiv}>
         <div className={style.box1}>
          <div className={style.boxText}>
             <u className={style.bodyText1}>
                Strategic Consultation
             </u>
             <u className={style.bodyText2}>
             We kick off with a strategic consultation 
             to understand your brand, goals, and audience
             </u>
          </div>
          <img className={style.image1} src={image1} alt="puzzle-image" />
         </div>
            <div className={style.box2}>
              <div className={style.flexDiv}>
               <div className={style.boxText1}>
               <u className={style.flexBoxText1}>
                 Collaboration
                </u>
                <u className={style.flexBoxText2}>
                  At KeySystem, we collaborate closely to 
                  ensure the end result meets your expectations 
                  and makes you happy
                </u>
               </div>
                <img className={style.image2} src={image2} alt="Handshake-image" />
              </div>
              <div className={style.flexDiv}>
               <div className={style.boxText2}>
               <u className={style.flexBoxText1}>
                Delivery
                </u>
                <u className={style.flexBoxText2}>
                Our delivery rate is 100%; 
                our clients deserve nothing less.
                </u>
               </div>
                <img className={style.image3} src={image3} alt="check-image" />
              </div>
              
            </div>
        </div>
     </section>
    </>
  )
}

export default Process