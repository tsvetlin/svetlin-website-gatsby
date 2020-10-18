import React from "react"

const MouseIcon = ({ onClick }) => {
  return (
    <div
      role="button"
      aria-label="mouse icon"
      className="mouseSpan"
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={0}
    >
      <svg
        className="mouseIcon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 76 130"
      >
        <g fill="none">
          <rect width="70" height="118" x="1.5" y="1.5" rx="36" />
          <circle cx="36.5" cy="31.5" r="4.5" />
        </g>
      </svg>
    </div>
  )
}

export default MouseIcon
