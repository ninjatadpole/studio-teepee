import React from 'react';

import ContactForm from '../components/contact-form';
import SocialLinks from '../components/social-links';

const Contact = function(props) {
  const trackClick = (e) => {
    if (window.ga) {
      window.ga('send', 'event', {
        eventCategory: 'contact',
        eventAction: 'clicked',
        eventLabel: `contact ${e.target.parentElement.className}`
      });
    }
  }

  return (
    <main className="page-contact">
      <h1>Get in touch</h1>
      <div className="content">
        <div className="contact-types">
          <dl>
            <dt>
              Email
            </dt>
            <dd className="email">
              <a
                href="mailto:hello@studioteepee.co.uk"
                onClick={ trackClick }
              >hello@studioteepee.co.uk</a>
            </dd>

            <dt>
              Phone
            </dt>
            <dd className="phone">
              <a
                href="tel:01353611721"
                onClick={ trackClick }
              >01353 611721</a>
            </dd>

            <dt>
              Mobile
            </dt>
            <dd className="mobile">
              <a
                href="tel:07534323431"
                onClick={ trackClick }
              >07534 323431</a>
            </dd>

            <dt>
              Address
            </dt>
            <dd>
              4 Willow Walk, Ely<br />
              CB7 4AT
            </dd>

            <dt>
              Follow me
            </dt>
            <dd>
              <SocialLinks location="contact" />
            </dd>
          </dl>
        </div>

        <ContactForm page="contact page" />
      </div>
    </main>
  );
}

export default Contact;
