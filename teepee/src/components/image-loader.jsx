import React from 'react';
import { withRouter } from 'react-router'
import classnames from 'classnames';

class ImageLoader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      loading: true,
      mounted: false,
    }

    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 500);
  }

  handleLoad() {
    this.setState({
      loading: false,
      loaded: true,
    });
  }

  render() {
    const { src, alt } = this.props;
    return (
      <figure className={ classnames("image-loader", { ...this.state }) }>
        <img alt="" { ...{ src, alt } } onLoad={ this.handleLoad } />
      </figure>
    )
  }
}

export default withRouter(ImageLoader)
