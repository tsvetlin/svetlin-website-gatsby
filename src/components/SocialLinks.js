import React from "react"

export default function SocialLinks() {
  return (
    <ul className="list-inline list-social">
      <li key="https://github.com/tsvetlin" className="list-inline-item">
        <a
          aria-label="GitHub"
          href="https://github.com/tsvetlin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </li>
      <li key="https://www.instagram.com/szvetlin/" className="list-inline-item">
        <a
          aria-label="Instagram"
          href="https://www.instagram.com/szvetlin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </li>
    </ul>
  )
}
