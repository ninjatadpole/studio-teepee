import React from 'react';

function Footer (props) {
  return (
    <footer className="wrapper">
      <div className="row">
        <ul className="membership">
          <li
            className="icon-logo-riba"
            title="studio teepee is a member of the Royal Institune of British Architects"
          >
            <span className="title">RIBA</span>
          </li>
          <li
            className="icon-logo-arb"
            title="studio teepee is a member of the Architects Registration Board"
          >
            <span className="title">ARB</span>
          </li>
        </ul>

        <ul className="contact">
          <li className="telephone">
            t: <a href="tel:01353 611 721">01353 611 721</a>
          </li>
          <li className="icon-logo" />
          <li className="email">
            <a href="mailto:hello@studioteepee.co.uk">hello@studioteepee.co.uk</a>
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
      </div>
    </footer>
  )
}

export default Footer;
