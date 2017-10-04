import React from 'react';

const HomeOwner = function(props) {
  return (
    <main className="page-homeowner">
      <div className="introduction">

        <h1>homeowner</h1>

        <div className="description">
          <div className="col">
            <p>
              Creating places which enhance a home is always exciting.
              From modest alterations, to creating new homes from
              scratch, <b>studio teepee</b> can provide architectural
              services tailored to suit each project:-
            </p>
            <ul>
              <li>Appraising opportunities for alterations,
              extensions and new buildings;</li>
              <li>Preparing planning and building regulations
              applications;</li>
              <li>Preparing tender information and
              appointing contractors;</li>
              <li>Contract administration;</li>
              <li>Completion certification and sign-off</li>
            </ul>
          </div>
          <div className="col">
            <p>
              Our past projects have been challenging and diverse:-
            </p>
            <ul>
              <li>Extensions and alterations to listed buildings;
              new build straw bale construction;</li>
              <li>New homes in the open countryside;</li>
              <li>Crafted extensions in tight urban settings;</li>
              <li>Extensions and new homes within Conservation Areas;</li>
              <li>The renovation and extension of an Airey
              House (post-war prefabricated concrete frame
              building), including a straw-bale extension;</li>
              <li>Converting shops to become new homes</li>
            </ul>
          </div>
          <div className="col">
            <p>
              We tailor our approach to suit each project, whether our clients’
              priorities are space, light, connection to the outdoors,
              sustainability, materiality, or simply to ensure the full
              potential of each home is achieved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomeOwner;
