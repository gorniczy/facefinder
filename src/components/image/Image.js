import React from "react"
import "./Image.css"

const Image = ({ imageURL, box }) => {
  return (
    <div className="center">
      <div className="absolute pa3">
        <img
          id="linkedInmage"
          src={imageURL}
          alt={"processed file"}
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        />
      </div>
    </div>
  )
}

export default Image
