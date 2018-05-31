import React from 'react'

const ScrollPrompt = (props) => {
  return (
      <a className={props.scrollerClass} onClick={props.enterVp3}>
          <svg xmlns="http://www.w3.org/2000/svg" width="39.5" height="40" viewBox="0 0 39.5 40">
            <path className="line-1" fill="none" stroke="#fff" strokeMiterlimit="10" d="M39.3 16.4L19.8 28.9.3 16.4"/>
            <path className="line-2" fill="none" stroke="#fff" strokeMiterlimit="10" d="M32.3 8.4l-12.5 8-12.5-8"/>
            <path className="line-3" fill="none" stroke="#fff" strokeMiterlimit="10" d="M25.5.4l-5.7 3.7L14.1.4"/>
          </svg>
      </a>
  )
}

export default ScrollPrompt
