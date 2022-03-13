import React, { useState, useEffect } from "react";
// import projectsjson from './projects/projects.json'
import "./styles/projects.css";

const Projects = () => {
  const [projects, getProjects] = useState([]);

  useEffect(() => {
    fetch(
      "https://github.com/NasarTarique/jsontblogtestrepo/blob/master/media/projects/projects.json",
      { mode: "no-cors" }
    ).then((response) => {
      console.log(response);
    });

    getProjects([{
						"id":"0",
						"Name":"TorrentPy",
						"Description":"A Torrent Client CLI written in python",
						"Github":"https://github.com/NasarTarique/torrent_py",
						"Website":""
				}]);
  }, []);
  const getGithub = (elem) => {
    if (elem !== "") {
      return (
        <a href={elem} target="_blank" rel="noopener noreferrer">
          {" "}
          <i className="fab fa-github"></i> GITHUB
        </a>
      );
    }
  };
  const getWebsite = (elem) => {
    if (elem !== "") {
      return (
        <a
          className="project-website"
          href={elem}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          WEBSITE
        </a>
      );
    }
  };
  const getProjectBlog = () => {
    return projects.map((elem) => {
      return (
        <div className="project-block" key={elem.id}>
          <h2 className="project-name">{elem.Name}</h2>
          <p>{elem.Description}</p>
          <div className="github-button">
            {getGithub(elem.Github)}
            {getWebsite(elem.Website)}
          </div>
        </div>
      );
    });
  };
  return (
    <div className="projects-container">
      <div className="projects">
        <p className="project-header">PROJECTS</p>
        {getProjectBlog()}
      </div>
    </div>
  );
};

export default Projects;
