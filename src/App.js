import React from "react"
import Navigation from "./components/navigation/Navigation"
import Logo from "./components/logo/Logo"
import Rank from "./components/rank/Rank"
import LinkForm from "./components/linkform/LinkForm"
import Particles from "react-particles-js"
import Clarifai from "clarifai"
import "./App.css"

const particlesParams = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 600
      }
    },
    color: {
      value: "#227064"
    },
    line_linked: {
      color: "#227064"
    }
  }
}

const app = new Clarifai.App({ apiKey: "f0adc6d475564f23bd76e5847bc1f78a" })

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: ""
    }
  }

  onChange = event => {
    this.setState = {
      input: event.target.value
    }
  }

  onSubmit = () => {
    app.models
      .predict(
        Clarifai.GENERAL_MODEL,
        "https://samples.clarifai.com/metro-north.jpg"
      )
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesParams} />
        <Navigation />
        <Logo />
        <Rank />
        <LinkForm onChange={this.onChange} onSubmit={this.onSubmit} />
        {
          // <Image />
        }
      </div>
    )
  }
}

export default App
