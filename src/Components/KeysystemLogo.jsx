import React from 'react'
import style from './KeysystemLogo.module.css'
import image1 from '../assets/Group 7.svg'

function KeysystemLogo() {
  return (
    <>
       <div className={style.logoContainer}>
            <img src={image1} alt="Logo" className={style.logo} />
            <div>
            <div className={style.keySystem}><b className={style.key}>Key</b>System</div>
            <div className={style.techLtd}>Technology Limited</div>
            </div>
        </div>
    </>
  )
}

export default KeysystemLogo