import React from "react"
import "./Image.css"

const Image = props => {
  return (
    <div className="center">
      <div className="absolute pa3">
        <img
          id="linkedInmage"
          src={props.imageURL}
          alt={"processed file"}
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: props.box.topRow,
            right: props.box.rightCol,
            bottom: props.box.bottomRow,
            left: props.box.leftCol
          }}
        />
      </div>
    </div>
  )
}

export default Image
