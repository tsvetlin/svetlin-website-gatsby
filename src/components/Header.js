import React, { Component } from "react"
import { Link } from "gatsby"

export default class Header extends Component {
  handleSticky = () => {
    const { headerPosition } = this.state
    const header = document.getElementById("header")

    if (window.pageYOffset > headerPosition) {
      header.classList.add("sticky")
    } else {
      header.classList.remove("sticky")
    }
  }

  componentDidMount() {
    this.setState({
      headerPosition: document.getElementById("header").offsetTop,
    })
    window.addEventListener("scroll", this.handleSticky)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleSticky)
  }

  render() {
    return (
      <header id="header">
        <div className="header-container">
          <Link to="/">Home</Link>
          <div>
            <span>Svetlin:</span>
            <Link to="/makes">Makes</Link>
            <Link to="/codes">Codes</Link>
            <Link to="/cooks">Cooks</Link>
            <Link to="/trains">Trains</Link>
            <Link to="/drinks">Drinks</Link>
          </div>
        </div>
        <div className="separator" />
      </header>
    )
  }
}
