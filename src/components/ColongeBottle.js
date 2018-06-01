import React from 'react'
import colongeBase from '../assets/cologneBase.png'
import colongeTop from '../assets/cologneTop.png'

const ColongeBottle = (props) =>{
  return(
    <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="400" className="colongeDiv" >
      <div onClick={props.clickCircle} className={props.pulsatingCircleClass}></div>
      <img className={props.topClass} src={colongeTop} alt="cap"/>
      <img className={props.bottleClass} src={colongeBase} alt="base"/>
    </div>
  )
}

export default ColongeBottle
