import React from "react"
import Header from "../components/Header"
import Landing from "../components/Landing"
import About from "../components/About"
import Footer from "../components/Footer"
import Helmet from "react-helmet"

import "../assets/sass/svetlin.scss"
import Image from "../assets/images/hexagon-porto-cropped.png"

export default function Home() {
  const SEO = {
    author: "Svetlin Tanyi",
    title: "Svetlin's website",
    description: "Svetlin's portfolio and hobby contents",
    keywords: "site, web, portfolio, hobby",
    type: "website",
  }

  return (
    <div>
      <Helmet
        title="Svetlin's website"
        meta={[
          { name: "description", content: SEO.description },
          {
            name: "keywords",
            content: SEO.keywords,
          },
          {
            property: "og:title",
            content: SEO.title,
          },
          {
            property: "og:description",
            content: SEO.description,
          },
          {
            property: "og:type",
            content: SEO.type,
          },
          {
            name: "twitter:creator",
            content: SEO.author,
          },
          {
            name: "twitter.title",
            content: SEO.title,
          },
          {
            name: "twitter.description",
            content: SEO.description,
          },
          {
            property: "og:image",
            content: Image,
          },
          {
            property: "og:image:width",
            content: Image.width,
          },
          {
            property: "og:image:height",
            content: Image.height,
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Landing />
      <Header />
      <About />
      <Footer />
    </div>
  )
}
