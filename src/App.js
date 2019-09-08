import React from "react"
import Navigation from "./components/navigation/Navigation"
import Logo from "./components/logo/Logo"
import Rank from "./components/rank/Rank"
import LinkForm from "./components/linkform/LinkForm"
import Image from "./components/image/Image"
import Signin from "./components/signin/Signin"
import Register from "./components/register/Register"
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

const initialState = {
  input: "",
  imageURL:
    "https://aiahouston.org/media/content-images/placeholder-square.jpg",
  box: {
    leftCol: 0,
    topRow: 0,
    rightCol: 0,
    bottomRow: 0
  },
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: ""
  }
}

class App extends React.Component {
  constructor() {
    super()
    this.state = initialState;
  }

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
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
    this.setState({ box })
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
    fetch("https://floating-waters-72385.herokuapp.com/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(res => res.json())
      .then(response => {
        if (response) {
          fetch("https://floating-waters-72385.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(res => res.json())
            .then(count => {
              this.setState(
                Object.assign(this.state.user, {
                  entries: count
                })
              )
            })
        }
        this.frameTheFace(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err))
  }

  handleKeyPress = e => {
    return e.key === "Enter" ? this.onSubmit() : null
  }

  onRouteChange = route => {
    if (route === "signout") {
      this.setState(initialState)
    } else if (route === "home") {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route })
  }

  render() {
    const { isSignedIn, route, box, imageURL } = this.state
    return (
      <div className="App">
        <Particles className="particles" params={particlesParams} />
        <Logo />
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={isSignedIn}
        />
        {route === "home"
        ? <div>
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <LinkForm
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              handleKeyPress={this.handleKeyPress}
            />
            <Image box={box} imageURL={imageURL} />
          </div>
        : (route === "signin"
        ? <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        : <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        )}
      </div>
    )
  }
}

export default App
