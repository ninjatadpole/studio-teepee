import React from 'react';
import { Redirect } from 'react-router';
import classnames from 'classnames';

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
    let heroImg;
    let sideImgHero = false;
    if (projectMatch.hero) {
      heroImg = require(`../assets/images/projects/${projectId}/hero.jpg`);
    } else {
      const firstImage = projectMatch.images[0];
      heroImg = require(`../assets/images/projects/${projectId}/${firstImage}`);
      sideImgHero = true;
    };

    const Description = require(`../components/projects/${projectId}`).default;

    return (
      <main className="page-project-details">
        <h1>{ projectMatch.type }</h1>
        <h2>{ projectMatch.location }</h2>

        <div className="content">
          {
            heroImg &&
            <div className={ classnames("hero", {
              'show-for-xs hide-for-sm': sideImgHero
            }) }>
              <img src={ heroImg } alt="" />
            </div>
          }
          <div className="description">
            <Description />
          </div>
          {
            projectMatch.images &&
            <ul className="images">
              {
                projectMatch.images.reduce((aggregate, image, index) => {
                  const imgSrc = require(`../assets/images/projects/${projectId}/${image}`);
                  return [
                    ...aggregate,
                    <li
                      className={ classnames({
                        'hide-for-xs show-for-sm': index === 0 && sideImgHero
                      }) }>
                      <img
                        src={ imgSrc }
                        alt=""
                        key={ `image-${index}` } />
                    </li>
                  ];
                }, [])
              }
            </ul>
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
