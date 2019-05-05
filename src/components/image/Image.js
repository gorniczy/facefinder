import React from "react"

const Image = props => {
  return (
    <div className="center">
      <div className="pa5">
        <img
          src={props.imageURL}
          alt={"processed file"}
          width="500px"
          height="auto"
        />
      </div>
    </div>
  )
}

export default Image
