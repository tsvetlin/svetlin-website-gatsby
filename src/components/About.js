import React from "react"
import TechnologyList from "./TechnologyList"
import HexagonImage from "../assets/images/hexagon-porto-cropped.png"

export default function About() {
  return (
    <div className="about">
      <h3>About me</h3>
      <div className="feature-container">
        <div className="feature">
          <div className="hex-wrap">
            <div className="hexagon">
              <i className="fas fa-rocket fa-3x"></i>
            </div>
          </div>
          <div className="feature-title">Fast</div>
          <div className="feature-description">
            I love developing high performing applications
          </div>
        </div>
        <div className="feature">
          <div className="hex-wrap">
            <div className="hexagon">
              <i className="fas fa-laptop-code fa-3x"></i>
            </div>
          </div>
          <div className="feature-title">Responsive</div>
          <div className="feature-description">
            Optimized layouts for desktop, tablet and mobile
          </div>
        </div>
        <div className="feature">
          <div className="hex-wrap">
            <div className="hexagon">
              <i className="far fa-lightbulb fa-3x"></i>
            </div>
          </div>
          <div className="feature-title">Intuitive</div>
          <div className="feature-description">
            Great user experience via easy to use natural UI
          </div>
        </div>
      </div>

      <div className="feature-technologies">
        <div className="feature-technologies-description">
          <img src={HexagonImage} alt=""></img>
          <div>I am using and developing in the following technologies:</div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
        <TechnologyList />
      </div>
    </div>
  )
}
