import React from 'react';

import approachCompleted from '../assets/images/approach-completed.jpg';
import approachConcept from '../assets/images/approach-concept.jpg';
import approachConstruction from '../assets/images/approach-construction.jpg';
import approachLivedIn from '../assets/images/approach-lived-in.jpg';
import approachRender from '../assets/images/approach-render.jpg';
import approachTea from '../assets/images/approach-tea.jpg';

const Approach = function(props) {
  return (
    <main className="page-approach">
      <h1>Approach</h1>

      <div className="content">
        <section className="intro">
          <div className="copy">
            <p>
              Each design is bespoke. The personalities of my clients,
              their interests and aspirations, the site and the local
              context all make for exciting and unique projects and homes.
            </p>
            <p>
              Delivering these individual places is complex.  I’ve
              outlined below the stages that we will go through together.
              The pace and level of guidance for each stage can vary to
              suit each project.
            </p>
            <p>
              If you are considering your own project, please get in touch
              via <a href="/contact">the contact page</a>.
            </p>
          </div>
        </section>

        <section className="stage-listening">
          <div className="copy">
            <h2>Stage 1: Listening</h2>
            <p>
              It is so important that time is dedicated early to understand what it is your project is hoping to achieve.  This often requires lots of tea!
            </p>
            <p>
              As the project develops, these early conversations will inform a personalised design approach.
            </p>
            <p>
              Time is also dedicated to understand the site, the relative position of the sun, the location, and the surroundings.  This will build a picture of how the design will sit comfortably in its backdrop.
            </p>
          </div>
          <div className="illustration">
            <img src={ approachTea } alt="" />
          </div>
        </section>

        <section className="stage-concept">
          <div className="copy">
            <h2>
              Stage 2: Concept and Testing
            </h2>
            <p>
              Sharing interesting images, sketches, computer-generated models, and physical models can all be used to test the early design themes, to better understand your aspirations and priorities.
            </p>
            <p>
              From the beginning, designs are worked on to scale to begin to understand how the proposals might work within the site, how sunlight and shadows may affect the design across the day and year, identify key views to and from important spaces, etc.
            </p>
            <p>
              Dependant on the scale and complexity of the project, the appointment of external surveys and consultants may be discussed at this stage.
            </p>
          </div>
          <div className="illustration">
            <img src={ approachConcept } alt="" />
          </div>
        </section>

        <section className="stage-design">
          <div className="copy">
            <h2>
              Stage 3: Developed Design
            </h2>
            <p>
              Concept designs are pushed and pulled iteratively to become fully-planned designs, suitable for submission to Local Authorities for Planning Permission if appropriate.
            </p>
            <p>
              Computer-generated views describe the look and feel of the design, inside and out, helping you to see your exciting spaces, and your feedback will allow me to make it even better.
            </p>
            <p>
              The feedback from external surveys and consultants will be incorporated into the overall design.
            </p>

            <h2>
              Stage 4: Technical Design
            </h2>
            <p>
              All materials and finishes are considered during this stage, with lots of talking about the character of different spaces, collecting material samples and exploring textures.  Internal renders evolve to test the interior designs.
            </p>
            <p>
              Alongside this, the extensive task of detailing and documenting the technical requirements of the project will be carried out, including discussing the project with Building Control.
            </p>
            <p>
              The information is developed sufficiently to become the package of information sent to the selected builders for preparing their quotes.
            </p>
          </div>
          <div className="illustration">
            <img src={ approachRender } alt="" />
          </div>
        </section>

        <section className="stage-construction">
          <div className="copy">
            <h2>
              Stage 5: Construction
            </h2>
            <p>
              After all this hard work, the building stage should be exciting and enjoyable!  I can help mitigate many of the risks associated with construction.
            </p>
            <p>
              I regularly attend site and create reports to document progress and the accuracy of the build, and to manage any issues as they arise.
            </p>
            <p>
              It is normal for things to change during the build.  I will negotiate these changes while maintaining your key aspirations, by drawing on my technical and construction experiences from the past 15 years.
            </p>
            <p>
              Effective communication and maintaining good relationships between all parties is key to a successful build.  Adopting appropriate construction contracts defines the responsibilities of each from the outset, protecting your considerable investment.
            </p>
          </div>

          <div className="illustration">
            <img src={ approachConstruction } alt="" />
            <img src={ approachCompleted } alt="" />
          </div>
        </section>

        <section className="stage-lived-in">
          <div className="copy">
            <h2>
              Stage 6: Lived-In
            </h2>
            <p>
              Once completed, moved-in, lived-in, and properly road-tested, I really enjoy revisiting clients and their tailor-made designs, developed specifically for each unique client and context.
            </p>
            <p>
              This feedback is very important to me to continue to improve my services, and sometimes to start the ball rolling for the next exciting project!
            </p>
          </div>

          <div className="illustration">
            <img src={ approachLivedIn } alt="" />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Approach;
