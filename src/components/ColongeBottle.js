import React from 'react'
import colongeBase from '../assets/cologneBase.png'
import colongeTop from '../assets/cologneTop.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

const ColongeBottle = (props) =>{
  return(
    <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="400" className="colongeDiv" >
      <div onClick={props.clickCircle} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="3000" className={props.pulsatingCircleClass} ></div>
      <img className={props.topClass} src={colongeTop}/>
      <img className={props.bottleClass} src={colongeBase}/>
    </div>
  )
}

export default ColongeBottle
