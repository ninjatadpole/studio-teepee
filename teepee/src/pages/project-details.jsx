import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import classnames from 'classnames';

import ImageLoader from '../components/image-loader';

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
  const hasImages = (projectMatch.images || projectMatch.hero);

  if (projectMatch && hasImages) {
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
        <div className="title">
          <ProjectBackButton />

          <h1>{ projectMatch.location }</h1>
          <h2>{ projectMatch.type }</h2>
        </div>

        <div className="content">
          {
            heroImg &&
            <div className={ classnames("hero", {
              'show-for-xs hide-for-sm': sideImgHero
            }) }>
              <span>
                <ImageLoader src={ heroImg } alt="" />
              </span>
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
                      }) }
                      key={ `image-${index}` }
                    >
                      <ImageLoader src={ imgSrc } alt="" />
                    </li>
                  ];
                }, [])
              }
            </ul>
          }

        </div>

        <div className="fin">
          <ProjectBackButton />
        </div>

      </main>
    );

  } else {
    return (
      <Redirect to="/projects" />
    );
  }
}

const ProjectBackButton = (props) => {
  return (
    <Link className="back-button" to="/projects">&lt; Back to Projects</Link>
  );
}

export default ProjectDetails;
