import React from "react"
import Navigation from "./components/navigation/Navigation"
import Logo from "./components/logo/Logo"
import Rank from "./components/rank/Rank"
import LinkForm from "./components/linkform/LinkForm"
import Particles from "react-particles-js"
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

function App() {
  return (
    <div className="App">
      <Particles className="particles" params={particlesParams} />
      <Navigation />
      <Logo />
      <Rank />
      <LinkForm />
      {
        // <Image />
      }
    </div>
  )
}

export default App
