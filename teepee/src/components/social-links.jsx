import React from 'react';

function SocialLinks (props) {
  const openInNewTab = (e) => {
    const link = e.target;
    e.preventDefault();
    window.open(link.getAttribute('href'), link.getAttribute('title'));
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

export default SocialLinks
