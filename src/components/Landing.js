import React, { Component } from "react"
import SocialLinks from "./SocialLinks"
import MouseIcon from "./MouseIcon"

class Landing extends Component {
  handleScroll = e => {
    const header = document.getElementById("header")
    header.scrollIntoView({ behavior: "smooth" })
  }
  render() {
    return (
      <div className="landing">
        <h1>
          Hello, I'm <span>Svetlin Tanyi</span>.
        </h1>
        <h2>I'm a full-stack web developer.</h2>
        <SocialLinks />
        <MouseIcon onClick={this.handleScroll} />
      </div>
    )
  }
}

export default Landing
