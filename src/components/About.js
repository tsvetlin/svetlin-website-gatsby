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
          <img src={HexagonImage} alt="Svetlin"></img>
          <div className="bio">
            I work as a Software Engineer for{" "}
            <span>
              <a href="http://aitia.ai">AITIA</a>
            </span>{" "}
            in Budapest, Hungary. I create JavaScript based applications and
            websites. My research interests reside in the field of Industrial
            IoT, Service Oriented Architectures and Management Solutions. In the
            last three years I am actively involved in European projects (
            <span>
              <a href="https://productive40.eu/">Productive4.0</a>
            </span>
            ,{" "}
            <span>
              <a href="https://www.arrowhead.eu/arrowheadtools">
                Arrowhead Tools
              </a>
            </span>
            ) either as Work Package leader or Task Leader and I am a member of
            the Management Committee. I also oversee the development of the{" "}
            <span>
              <a href="https://arrowhead.eu/arrowheadframework/this-is-it">
                Eclipse Arrowhead Framework
              </a>
            </span>
            .
          </div>
        </div>
        <div className="technology-list-container">
          <div className="tech-into">
            I am using and developing in the following technologies:
          </div>
          <TechnologyList />
        </div>
      </div>
    </div>
  )
}
