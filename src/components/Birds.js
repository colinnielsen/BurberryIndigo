import React from 'react'
import birds from '../assets/birds.gif'
const Birds = (props) => {
  return(
    <img className={props.birdClass} src={birds}/>
  )
}

export default Birds
