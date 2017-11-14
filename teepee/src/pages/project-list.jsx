import React from 'react';

import ProjectTile from '../components/project-tile';

import projects from '../data/projects.json';
import projectsOther from '../data/projects-other.json';

const ProjectList = function(props) {
  return (
    <main className="page-project-list">
      <h1>Projects</h1>

      <div className="content">
        <ul className="projects">
          {
            projects.map((project) => {
              return (
                <ProjectTile { ...project } key={ `project-${project.id}` } />
              );
            })
          }
        </ul>

        <h2>other works and activities</h2>
        <ul className="projects">
          {
            projectsOther.map((project) => {
              return (
                <ProjectTile { ...project } key={ `project-${project.id}` } />
              );
            })
          }
        </ul>

      </div>
    </main>
  );
}

export default ProjectList;
