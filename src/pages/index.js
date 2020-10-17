import React from "react"
import Header from "../components/Header"
import Landing from "../components/Landing"
import About from "../components/About"
import Footer from "../components/Footer"

import "../assets/sass/svetlin.scss"

export default function Home() {
  return (
    <div>
      <Landing />
      <Header />
      <About />
      <Footer />
    </div>
  )
}
