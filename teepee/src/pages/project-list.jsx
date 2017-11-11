import React from 'react';

import ProjectTile from '../components/project-tile';

const projects = [
  {
    id: 'willow-walk-extension',
    type: 'Contemporary Extension',
    location: 'Willow Walk, Ely',
  },
  {
    id: 'crescent-extension',
    type: 'Contemporary Extension',
    location: 'The Crescent, Norwich',
  },
  {
    id: 'sussex-street-mixed',
    type: 'Mixed Use Development',
    location: 'Sussex Street, Norwich',
  },
  {
    id: 'willow-walk-remodelling',
    type: 'Home Remodelling',
    location: 'Willow Walk, Ely',
  },
  {
    id: 'hall-farm-venue',
    type: 'Rural Wedding Venue',
    location: 'Hall Farm, Stanningfield',
  },
  {
    className: 'contact',
    id: 'contact',
    type: 'Thinking about your own project?',
    location: 'Get in touch to arrange a free consultation',
  },
  {
    id: 'dukes-park-renovation',
    type: 'Extensive Renovation and Extension',
    location: 'Duke’s Park, Woodbridge',
  },
  {
    id: 'hall-farm-conversion',
    type: 'Barn Conversion',
    location: 'Hall Farm, Stanningfield',
  },
];

const otherProjects = [
  {
    id: 'cambridge-student-accommodation',
    type: 'Student Accommodation',
    location: 'North West Cambridge',
  },
  {
    id: 'long-road-student-centre',
    type: 'Student Centre',
    location: 'Long Road Sixth Form College, Cambridge',
  },
  {
    id: 'river-wensum-incubator',
    type: 'New Mills Incubator',
    location: 'River Wensum, Norwich',
  },
  {
    id: 'great-ellingham-consultation',
    type: 'Public Consultation, Ellingham Green',
    location: 'Great Ellingham, Norfolk',
  },
  {
    id: 'alabama-rural-studio',
    type: 'Rural Studio Research Trip',
    location: 'Alabama, US',
  },
]

const ProjectList = function(props) {
  return (
    <main className="page-project-list">
      <h1>Projects</h1>

      <div className="content">
        <ul className="projects">
          {
            projects.map((project) => {
              return (
                <ProjectTile { ...project } />
              );
            })
          }
        </ul>

        <h2>other works and activities</h2>
        <ul className="projects">
          {
            otherProjects.map((project) => {
              return (
                <ProjectTile { ...project } />
              );
            })
          }
        </ul>

      </div>
    </main>
  );
}

export default ProjectList;
