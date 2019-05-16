import React from "react"
import "./LinkForm.css"

const LinkForm = ({ onChange, onSubmit }) => {
  return (
    <div>
      <p className="f3 center">
        {"If you need help spotting faces in your pictures, let us help you"}
      </p>
      <div className="center">
        <div className="form pa4 br3 shadow-5">
          <input className="f4 pa2 w-80" type="text" onChange={onChange} />
          <button
            className="w-20 f4 link ph3 pv2 dib white bg-light-red"
            onClick={onSubmit}
          >
            Look up
          </button>
        </div>
      </div>
    </div>
  )
}

export default LinkForm
