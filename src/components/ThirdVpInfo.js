import React from 'react'
import gif from '../assets/burberry_1_3.gif'

const ThirdVpInfo = (props)=>{
  return(
    <div data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000" className="thirdvpInfo">
      <h3>For the modern man.</h3>
      <p className={props.hidden}>
        The aromatic scent features zesty and herbal top notes of lemon oil, blackcurrant and rosemary. Green violet leaf, driftwood and spearmint are layered over a warm and earthy base of amber, white oak moss and musk.
      </p>
      <hr className={props.hidden}></hr>
      <img className={props.hidden} src={gif}/>
    </div>
  )
}

export default ThirdVpInfo
