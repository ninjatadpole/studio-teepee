import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const ProjectTileDisplay = function(props) {
  const {
    handleImgLoad,
    imgLoading,
    imgSrc,
    linkUrl,
    location,
    type
  } = props;

  return (
    <li className={ classnames("project-tile", props.className) }>
      <Link to={ linkUrl }>
        <figure className={ classnames({ loading: imgLoading }) }>
          <img src={ imgSrc } alt="" onLoad={ handleImgLoad } />
        </figure>
        <div className="description">
          <h3>{ location }</h3>
          <p>{ type }</p>
        </div>
      </Link>
    </li>
  );
}

ProjectTileDisplay.propTypes = {
  handleImgLoad: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  imgLoading: PropTypes.bool.isRequired,
};

export default ProjectTileDisplay;
