import React from "react"
import { userInfo } from "os";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPass: ''
    }

  }
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }
  onPassChange = (event) => {
    this.setState({signInPass: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3001/signin', {
      'method': 'post',
      'headers': {'Content-Type': 'application/json'},
      'body': JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPass
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange("home")
        }
      })
  }
  render() {
    const { onRouteChange } = this.props;
    return (
      <main className="pa4 black-80 center">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="align-text f3 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                onChange={this.onEmailChange}
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                onChange={this.onPassChange}
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="center">
            <input
              onClick={this.onSubmitSignIn}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3 center">
            <p
              onClick={() => onRouteChange("register")}
              className="f6 link dim black db pointer"
            >
              Register
            </p>
          </div>
        </div>
      </main>
    )
  }
}

export default Signin
