import React from 'react'

const IntroText = (props) =>{
  return (
    <div className="introtext">
      <p className={props.p1Class}>
        A man of contrasts. Classic yet contemporary. Sophisticated and sensual.</p>
      <br></br>
      <p className={props.p2Class}>
        With laid-back style and a rebellious attitude, he is refreshed and invigorated by an impromptu escape from the city.
      </p>
    </div>
  )
}

export default IntroText
