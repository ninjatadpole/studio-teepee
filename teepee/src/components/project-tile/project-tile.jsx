import React from 'react';
import PropTypes from 'prop-types';

import ProjectTileDisplay from './project-tile-display';

class ProjectTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    }

    this.handleImgLoad = this.handleImgLoad.bind(this);
  }

  handleImgLoad(e) {
    this.setState({
      loading: false,
    });
  }

  render() {
    const { id } = this.props;
    const imgSrc = require(`../../assets/images/projects/${id}/thumb.jpg`);
    const linkUrl = `${id === 'contact' ? '': '/projects'}/${id}`;

    return (
      <ProjectTileDisplay
        handleImgLoad={ this.handleImgLoad }
        imgLoading={ this.state.loading }
        imgSrc={ imgSrc }
        linkUrl={ linkUrl }
        { ...this.props }
      />
    );
  }
}

ProjectTile.propTypes = {
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default ProjectTile;
