import React from 'react'

const downArrow = (props) => {
  return (
    <div className={props.arrowClass}>
      <p onClick={props.scrollToProducts}><i className="arrow down"></i></p>
    </div>
//
  )
}

export default downArrow
