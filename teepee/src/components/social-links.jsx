import React from 'react';

function SocialLinks (props) {
  return (
    <ul className="social-links">
      <li className="linkedin">
        <a href="https://www.linkedin.com/company/18096317/" className="icon-logo-linkedin">
          <span className="title">LinkedIn</span>
        </a>
      </li>
      <li className="facebook">
        <a href="https://www.facebook.com/studioteepee.hi" className="icon-logo-facebook">
          <span className="title">Facebook</span>
        </a>
      </li>
      <li className="twitter">
        <a href="https://twitter.com/studioteepee_hi" className="icon-logo-twitter">
          <span className="title">Twitter</span>
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks
