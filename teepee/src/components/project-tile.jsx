import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const ProjectTile = function(props) {
  const { id, location, type } = props;

  const imgSrc = require(`../assets/images/project-${id}.jpg`);

  return (
    <li
      className={ classnames("project-tile", props.className) }
      key={ `project-${id}` }
    >
      <Link to={ `/project/${id}` }>
        <img src={ imgSrc } alt="" />
        <h3>{ type }</h3>
        <p>{ location }</p>
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
