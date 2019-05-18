import React from "react"
import Tilt from "react-tilt"
import face from "./facial-recognition.svg"
import "./Logo.css"

const Logo = () => {
  return (
    <div className="pa4 mt0 pointer logo">
      <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner">
          <img src={face} alt="face" />
        </div>
      </Tilt>
    </div>
  )
}

export default Logo
