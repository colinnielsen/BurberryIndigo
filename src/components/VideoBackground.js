import React from 'react'
import videosrc from '../assets/indigo.mp4'
import Button from './Button.js'

const VideoBackground = (props) => {
  return (
    <div className="landing-viewport">
      <video className="landing-viewport__video" playsInline autoPlay loop muted>
        <source src={videosrc} />
      </video>
      <h1>I N D I G O</h1>
      <Button enterScroll={props.enterScroll} />
    </div>
  )
}

export default VideoBackground
