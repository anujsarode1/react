import React, { Component } from "react";
// import "./NetlifyO.css";
import "./MovieHeader.css";
import "./Sliderbar.css";
import Sliderbar from "./Sliderbar";
import MovieHeader from "./MovieHeader";

export default class NetlifyO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: null,
      title: "",
    };
  }

  onButtonClick = (project) => {
    this.setState({
      title: project.title,
      selectedProject: project.component,
    });
  };

  render() {
    const projects = [
      {
        id: 1,
        title: "Amazon",
        description: "",
        // bgImage: "https://etimg.etb2bimg.com/photo/114184053.cms",
        component: <Sliderbar />,
      },
      {
        title: "Bulb",
        
        description: "",
        // bgImage: "https://hykoont.com/cdn/shop/articles/pikaso_texttoimage_35mm-film-photography-wall-bulb-high-detail-214475.jpg?v=1729136654&width=2048",
        component: <MovieHeader />,
      },
    ];

    return (<>
      <div className="dashboard-container" id="dashboard-container">
        {/* <div className="about" id="about"><h1>Welcome to the React js </h1></div> */}
        <div className="project-list-row">
          {projects.map((project, index) => (
            <a href="#project-list">
            <div key={index} className="project-card">
              <div
                className="card-body"
                onClick={() => this.onButtonClick(project)}
                style={{
                  backgroundImage: `url(${project.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="project-title">{project.title}</div>
                <div className="project-description">{project.description}</div>
                <button
                  className="project-button"
                  onClick={() => this.onButtonClick(project)}
                >
                  {project.title}
                </button>
              </div>
            </div></a>
          ))}
        </div>
        <div className="selected-project-container" id="project-list">
          <h3 className="selected-project-title">{this.state.title}</h3>
          <div className="selected-project-content">{this.state.selectedProject}</div>
        </div>
        {/* <div className="last-button"><button className="btn"><a href="#about">Back To Top</a></button></div> */}
      </div>
     
      </>);
  }
}