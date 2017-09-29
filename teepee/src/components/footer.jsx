import React from 'react';



function Footer (props) {
  return (
    <footer className="row container-fluid">
      <ul className="col-xs-6 contact vcard">
        <li className="adr address">
          A:
          <span className="street-address">4 Willow Walk</span>,
          <span className="locality">Ely</span>,
          <span className="postal-code">CB7 4AT</span>
        </li>
        <li className="tel">
          <a href="tel:01353611721">01353 611721</a>
          /
          <a href="tel:07534323431">07534 323431</a>
        </li>
        <li className="email">
          <a href="mailto:office@studioteepee.co.uk">office@studioteepee.co.uk</a>
        </li>
      </ul>

      <ul className="col-xs-6 social">
        <li className="linkedin">
          <a href="https://www.linkedin.com/company/18096317/">
            <span className="title">LinkedIn</span>
          </a>
        </li>
        <li className="facebook">
          <a href="https://www.facebook.com/studioteepee.hi">
            <span className="title">Facebook</span>
          </a>
        </li>
        <li className="twitter">
          <a href="https://twitter.com/studioteepee_hi">
            <span className="title">Twitter</span>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
