
import React from 'react'
import style from './Home.module.css'
import Nav from '../Components/Nav'
// import Hero from '../Components/Hero'
import Scrolleffect from '../Components/Scrolleffect'
import Trustedconsultant from '../Components/Trustedconsultant'
import Products from '../Components/Products'
import Vision from '../Components/Vision'
import Companies from '../Components/Companies'
import HeroSection from '../Components/Hero'
import Trustedpartners from '../Components/Trustedpartners'
import Process from '../Components/Process'
import Coperatelogos from '../Components/Coperatelogos'
import Partners from '../Components/Partners'
import GetstartedCard from '../Components/GetstartedCard'
import Services from '../Components/Services'

function Home() {
  return (
    < >
     <div className={style.homePage}>
     <Nav />
     {/* <Hero /> */}
     <HeroSection />
     <Scrolleffect />
     <Trustedconsultant />
     <Products />
     <Vision />
     <Companies />
     <div className={style.darkGradients}>
      <div className={style.containers}>
      <Coperatelogos />
      <Trustedpartners />
     <Process />
      <Partners />
      <GetstartedCard />
      <Services />
      </div>
     </div>
     </div>
    
    </>
  )
}

export default Home