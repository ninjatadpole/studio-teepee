import React from 'react';

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

  if (projectMatch) {
    return (
      <main className="page-project-details">
        <h1>{ projectMatch.type }</h1>
        <h2>{ projectMatch.location }</h2>

        <div className="content">
          Some images and stuff
        </div>
      </main>
    );

  } else {
    return null;
  }
}

export default ProjectDetails;
