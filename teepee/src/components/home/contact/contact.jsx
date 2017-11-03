import React from 'react';

import ContactForm from './contact-form';

function HomeContact (props) {
  return (
    <section className="home-contact">
      <div className="content">
        <q className="reason">I create places that make people happy.</q>

        <div className="content-group">
          <div className="intro">
            <p>
              My name is Matt Plummer. I am an Architect, and I
              lead <span className="brand">studio teepee</span>.
            </p>
            <p>
              I created <span className="brand">studio teepee</span> to provide
              a personal, accessible architectural service, with no
              pre-conceived design agenda.
            </p>
            <p>
              My approach is to support and guide my clients through the
              complex design and construction processes, to deliver
              designs tailor-made to each client and context.
            </p>
            <p>
              I have worked with private, public and commercial clients over
              the past 15 years, on projects ranging from a garden studio to
              large student accommodation complexes.
            </p>
            <p>
              <span className="brand">studio teepee</span> allows me to follow
              my passions, from exploring interesting materials and tactile
              details, to creating new types of housing design and community
              buildings.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default HomeContact;
