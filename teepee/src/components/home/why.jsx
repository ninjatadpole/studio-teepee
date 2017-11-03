import React from 'react';
import PropTypes from 'prop-types';

import teepeeSrc from '../../assets/images/home-teepee.jpg';

function HomeWhy (props) {
  return (
    <section className="home-why">
      <div className="content">
        <div className="why-teepee">
          <div className="content-group">
            <h1>Why ‘Studio Teepee’</h1>
            <p>
              <span className="brand">teepees</span> are elegant, practical,
              and efficient.  They are sustainable and economic, yet
              delightful and fun (just look at their glamping appeal!).
            </p>
            <p>
              <span className="brand">studio teepee</span> aspires to embody
              these values in the buildings and places we live in
            </p>
          </div>
          <div className="content-group">
            <img src={ teepeeSrc } alt="" />
          </div>
        </div>

        <div className="why-work">
          <q>
            “I am impressed by Matt's enthusiasm for the projects we are
            working on together.  With Matt’s help and support I have grown
            in confidence when viewing potential projects.  I have no
            hesitation in recommending Matt for his positive attitude and
            'can-do' work ethic”
          </q>
          <cite>
            Jeanna Taylor-Young, Property Developer
          </cite>
        </div>
      </div>
    </section>
  )
}

HomeWhy.propTypes = {
}

export default HomeWhy;
