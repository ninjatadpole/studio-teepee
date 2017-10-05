import React from 'react';

const HomeOwner = function(props) {
  return (
    <main className="page-homeowner">
      <div className="introduction">

        <h1>homeowner</h1>

        <div className="description">
          <div className="col">
            <p>
              Creating, extending, or remodelling homes is always exciting.
              We tailor our design approach to suit each clients priorities,
              whether they are space, light, connection to the outdoors,
              sustainability, materiality, simply ensuring the full potential
              of each home is achieved, or normally – all of the above!
            </p>
          </div>

          <div className="col">
            <p>
              From modest alterations, to creating new homes from scratch,
              <b className="brand">studio teepee</b> can provide the full
              range of architectural services:-
            </p>
            <ul>
              <li>
                Providing designs to remodel, extend, or create new homes
              </li>
              <li>
                Preparing planning and building regulations applications
              </li>
              <li>
                Preparing tender information and appointing contractors
              </li>
              <li>
                Preparing construction information
              </li>
              <li>
                Contract administration
              </li>
            </ul>
          </div>

          <div className="col">
            <p>
              Our past projects have been diverse, with each providing unique
              challenges and interest:-
            </p>
            <ul>
              <li>
                Extensions and alterations to listed buildings
              </li>
              <li>
                Extensions and new homes within Conservation Areas
              </li>
              <li>
                New homes in the open countryside
              </li>
              <li>
                Crafted extensions in tight urban settings
              </li>
              <li>
                The renovation and extension of post-war prefabricated
                concrete frame buildings
              </li>
              <li>
                New build straw bale construction
              </li>
              <li>
                Converting shops to become new homes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomeOwner;
