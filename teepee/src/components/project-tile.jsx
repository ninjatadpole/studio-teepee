import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import ImageLoader from './image-loader';

const ProjectTile = (props) => {
  const { id, location, type } = props;
  const imgSrc = require(`../assets/images/projects/${id}/thumb.jpg`);
  const linkUrl = `${id === 'contact' ? '': '/projects'}/${id}`;

  return (
    <li className={ classnames("project-tile", props.className) }>
      <Link to={ linkUrl }>
        <ImageLoader src={ imgSrc } alt="" />

        <div className="description">
          <h3>{ location }</h3>
          <p>{ type }</p>
        </div>
      </Link>
    </li>
  );
}

ProjectTile.propTypes = {
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default ProjectTile;
