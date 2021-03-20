import React from "react"

export default function TechnologyList() {
  const technologyList = [
    { technology: "Android", since: "2012" },
    { technology: "HTML", since: "2018" },
    { technology: "CSS", since: "2018" },
    { technology: "React", since: "2018" },
    { technology: "JavaScript", since: "2017" },
    { technology: "NodeJS", since: "2017" },
    { technology: "Photoshop", since: "2016" },
    { technology: "Docker", since: "2016" },
    { technology: "GatsbyJS", since: "2019"},
    { technology: "Jenkins", since: "2019"},
    { technology: "Dart", since: "2020"},
    { technology: "Flutter", since: "2020"}
  ]

  return (
    <ul className="technology-list">
      {technologyList
        .sort((a, b) => (a.since > b.since ? 1 : b.since > a.since ? -1 : 0))
        .map((item, index) => {
          return (
            <li key={index} className="technology-list-item">
              <div className="technology-list-item-wrapper">
                <span className="technology-list-item-wrapper-technology">
                  {item.technology}
                </span>
                <span className="technology-list-item-wrapper-since">{`Since ${item.since}`}</span>
              </div>
            </li>
          )
        })}
    </ul>
  )
}
