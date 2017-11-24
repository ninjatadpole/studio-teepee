import React from 'react';
import { Redirect } from 'react-router';

import projects from '../data/projects.json';
import projectsOther from '../data/projects-other.json';

const ProjectDetails = function(props) {
  const { projectId } = props.match.params;
  const projectMatch = [ ...projects, ...projectsOther ].reduce((aggregate, item) => {
    if (item.id === projectId) {
      return item;
    }
    return aggregate;
  }, null);

  if (projectMatch && projectMatch.images) {
    const heroImg = projectMatch.hero ? require(`../assets/images/projects/${projectId}/hero.jpg`) : false;
    const Description = require(`../components/projects/${projectId}`).default;

    return (
      <main className="page-project-details">
        <h1>{ projectMatch.type }</h1>
        <h2>{ projectMatch.location }</h2>

        <div className="content">
          {
            heroImg &&
            <div className="hero">
              <img src={ heroImg } alt="" />
            </div>
          }
          <div className="description">
            <Description />
          </div>
          {
            projectMatch.images &&
            <div className="images">
              {
                projectMatch.images.reduce((aggregate, image, index) => {
                  const imgSrc = require(`../assets/images/projects/${projectId}/${image}`);
                  return [
                    ...aggregate,
                    <img src={ imgSrc } alt="" key={ `image-${index}` } />
                  ];
                }, [])
              }
            </div>
          }

        </div>
      </main>
    );

  } else {
    return (
      <Redirect to="/projects" />
    );
  }
}

export default ProjectDetails;
