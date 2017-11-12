import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const ProjectTile = function(props) {
  const { id, location, type } = props;

  const imgSrc = require(`../assets/images/project-${id}.jpg`);

  const linkPath = `${id !== 'contact' ? '/project' : ''}/${id}`;

  return (
    <li className={ classnames("project-tile", props.className) }>
      <Link to={ linkPath }>
        <img src={ imgSrc } alt="" />
        <div className="description">
          <h3>{ type }</h3>
          <p>{ location }</p>
        </div>
      </Link>
    </li>
  );
}

ProjectTile.propTypes = {
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ProjectTile;
