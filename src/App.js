import React from "react"
import Navigation from "./components/navigation/Navigation"
import Logo from "./components/logo/Logo"
import Rank from "./components/rank/Rank"
import LinkForm from "./components/linkform/LinkForm"
import Image from "./components/image/Image"
import Signin from "./components/signin/Signin"
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
      input: "",
      imageURL:
        "https://aiahouston.org/media/content-images/placeholder-square.jpg",
      box: {},
      route: "signin"
    }
  }

  calculateFaceLocation = data => {
    const clarifaiCoordinates =
      data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById("linkedInmage")
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: clarifaiCoordinates.left_col * width,
      topRow: clarifaiCoordinates.top_row * height,
      rightCol: width - clarifaiCoordinates.right_col * width,
      bottomRow: height - clarifaiCoordinates.bottom_row * height
    }
  }

  frameTheFace = box => {
    console.log(box)
    this.setState({
      box
    })
  }

  onChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  onSubmit = () => {
    this.setState({
      imageURL: this.state.input
    })
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.frameTheFace(this.calculateFaceLocation(response)))
      .catch(err => console.log(err))
  }

  onRouteChange = () => {
    this.setState({
      route: this.state.route === "signin" ? "home" : "signin"
    })
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesParams} />
        <Navigation onRouteChange={this.onRouteChange} />
        <Logo />
        {this.state.route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <div>
            <Rank />
            <LinkForm onChange={this.onChange} onSubmit={this.onSubmit} />
            <Image box={this.state.box} imageURL={this.state.imageURL} />
          </div>
        )}
      </div>
    )
  }
}

export default App
