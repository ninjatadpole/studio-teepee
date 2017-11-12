import React from 'react';
import PropTypes from 'prop-types';

function SocialLinks (props) {
  const openInNewTab = (e) => {
    const link = e.target;
    const href = link.getAttribute('href');
    const title = link.parentElement.className;

    e.preventDefault();
    window.open(href, title);

  }

  return (
    <ul className="social-links">
      <li className="linkedin">
        <a
          href="https://www.linkedin.com/in/matt-plummer-048914a0/"
          className="icon-logo-linkedin"
          onClick={ openInNewTab }
        >
          <span className="title">LinkedIn</span>
        </a>
      </li>
      <li className="facebook">
        <a
          href="https://www.facebook.com/studioteepee.hi"
          className="icon-logo-facebook"
          onClick={ openInNewTab }
        >
          <span className="title">Facebook</span>
        </a>
      </li>
      <li className="twitter">
        <a
          href="https://twitter.com/studioteepee_hi"
          className="icon-logo-twitter"
          onClick={ openInNewTab }
        >
          <span className="title">Twitter</span>
        </a>
      </li>
    </ul>
  );
}

SocialLinks.propTypes = {
  location: PropTypes.string.isRequired,
}

export default SocialLinks
