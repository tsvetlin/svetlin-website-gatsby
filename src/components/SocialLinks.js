import React from "react"

export default function SocialLinks() {
  return (
    <ul className="list-inline list-social">
      <li key="github.com" className="list-inline-item">
        <a
          aria-label="GitHub"
          href="https://github.com/tsvetlin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </li>
      <li key="https://github.com/tsvetlin" className="list-inline-item">
        <a
          aria-label="E-mail"
          href="https://github.com/tsvetlin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </li>
    </ul>
  )
}
