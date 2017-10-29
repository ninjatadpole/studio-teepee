import React from 'react';
import PropTypes from 'prop-types';

import heroImage1 from '../../assets/images/home-hero-1.jpg';
import heroImage2 from '../../assets/images/home-hero-2.jpg';

function Hero (props) {
  const { version } = props;

  const heroes = [
    {},
    {
      image: heroImage1,
      caption: (
        <figcaption>
          <q>
            “Even 10 years on, every new visitor walks in and says &nbsp;‘Wow’”
          </q>
          <cite>
            Duncan and Gillian,<br />
            New Kitchen and Dining Room
          </cite>
        </figcaption>
      )
    },
    {
      image: heroImage2,
      caption: (
        <figcaption>
          <q>
            “All our family and friends who have visited are awestruck”
          </q>
          <cite>
            Jan and Paul, Home Remodelling
          </cite>
        </figcaption>
      )
    }
  ];

  const hero = heroes[ version ];

  return (
    <figure className={`home-hero home-hero-${version}`}>
      <img src={ hero.image } alt="" />
      { hero.caption }
    </figure>
  )
}

Hero.propTypes = {
  version: PropTypes.oneOf([1, 2]),
}

export default Hero;
