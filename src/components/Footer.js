import React from "react"
import SocialLinks from "./SocialLinks"

export default function Footer() {
  return (
    <div className="footer">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
      </svg>
      <SocialLinks />
      <p>
        <span>Svetlin Tanyi</span> &copy; {new Date().getFullYear()}
      </p>
    </div>
  )
}
