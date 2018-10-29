import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Notify from './components/notify/Notify'
import Switc from './components/switch/Switch'
import { Route, Switch, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div class="field">
      <input id="switchRtlExample" type="checkbox" name="switchRtlExample" class="switch is-rtl" />
      <label for="switchRtlExample">Switch example</label>
    </div>
  )
}
const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>
const NotFoundPage = () => <h1>404</h1>
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
            {/* <div className="navbar-brand">
              <a className="navbar-item" href="https://devahoy.com">
                <img src="https://devahoy.com/assets/images/devahoy-text-logo.png" alt="DEVAHOY LOGO" width="112" height="28" />
              </a>
            </div> */}
            <div className="navbar-menu">
              <div className="navbar-end">
                <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
                <NavLink to="/switch" activeClassName="is-active" className="navbar-item">Switch</NavLink>
                <NavLink to="/projects" activeClassName="is-active" className="navbar-item">Projects</NavLink>
                <NavLink to="/about" activeClassName="is-active" className="navbar-item">About</NavLink>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/switch" component={Switc} />
          <Route path="/projects" component={Project} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}

export default App
