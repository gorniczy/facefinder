import React from "react"
import "./Rank.css"

const Rank = ({ name, entries }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
      }}
    >
      <div>{`${name} , your current entry count is...`}</div>
      <div className="white f1 ">{entries}</div>
    </div>
  )
}

export default Rank
