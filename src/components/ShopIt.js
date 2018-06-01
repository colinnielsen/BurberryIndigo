import React from 'react'
import bigbottle from '../assets/bigbottle.jpg'
import bigmediumbottle from '../assets/bigmediumbottle.jpg'
import mediumbottle from '../assets/mediumbottle.jpg'
import tinybottle from '../assets/tinybottle.jpg'
const ShopIt = (props) => {
  return(
    <div className="shopContainer">
      <div onClick={props.openLink} className="card">
        <img src={bigbottle} alt="big bottle"/>
        <p>Mr. Burberry Indigo Eau de Toilette 150ml</p>
        <small>$117.00</small>
      </div>
      <div  onClick={props.openLink} className="card">
        <img src={bigmediumbottle} alt="medium-big bottle"/>
        <p>Mr. Burberry Indigo Eau de Toilette 150ml</p>
        <small>$89.00</small>
      </div>
      <div onClick={props.openLink} className="card">
        <img src={mediumbottle} alt="medium bottle"/>
        <p>Mr. Burberry Indigo Eau de Toilette 150ml</p>
        <small>$69.00</small>
      </div>
      <div onClick={props.openLink} className="card">
        <img src={tinybottle} alt="small bottle"/>
        <p>Mr. Burberry Indigo Eau de Toilette 150ml</p>
        <small>$56.00</small>
      </div>
    </div>
  )
}

export default ShopIt
