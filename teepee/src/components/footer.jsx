import React from 'react';

function Footer (props) {
  return (
    <footer className="row container-fluid">
      <ul className="contact vcard">
        <li className="adr address">
          <abbr title="address">A:</abbr>
          <span className="street-address">4 Willow Walk</span>
          <span className="locality">Ely</span>
          <span className="postal-code">CB7 4AT</span>
        </li>
        <li className="tel phone">
          <abbr title="telephone">T:</abbr>
          <a href="tel:01353611721" title="land line">01353 611721</a>
          <a href="tel:07534323431" title="mobile">07534 323431</a>
        </li>
        <li className="email">
          <abbr title="email">E:</abbr>
          <a href="mailto:office@studioteepee.co.uk">office@studioteepee.co.uk</a>
        </li>
      </ul>

      <ul className="social">
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
    </footer>
  )
}

export default Footer;
