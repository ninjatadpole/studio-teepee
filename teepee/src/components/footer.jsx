import React from 'react';

import SocialLinks from './social-links';

function Footer (props) {
  const trackClick = (e) => {
    if (window.ga) {
      window.ga('send', 'event', {
        eventCategory: 'contact',
        eventAction: 'clicked',
        eventLabel: `footer ${e.target.parentElement.className}`
      });
    }
  }

  return (
    <footer className="wrapper">
      <div className="row">
        <ul className="membership">
          <li
            className="icon-logo-riba"
            title="Matt Plummer is a member of the Royal Institune of British Architects"
          >
            <span className="title">RIBA</span>
          </li>
          <li
            className="icon-logo-arb"
            title="Matt Plummer is a member of the Architects Registration Board"
          >
            <span className="title">ARB</span>
          </li>
        </ul>

        <ul className="contact">
          <li className="telephone">
            t: <a
              href="tel:01353 611 721"
              onClick={ trackClick }
              >01353 611 721</a>
          </li>
          <li className="icon-logo" />
          <li className="email">
            <a
              href="mailto:hello@studioteepee.co.uk"
              onClick={ trackClick }
            >hello@studioteepee.co.uk</a>
          </li>
        </ul>

        <SocialLinks location="footer" />
      </div>
    </footer>
  )
}

export default Footer;
