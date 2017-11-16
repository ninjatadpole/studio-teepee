import React from 'react';
import PropTypes from 'prop-types';

function HomeHero (props) {
  const { version } = props;

  const heroes = [
    {},
    {
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

  let heroImage;
  const imgPath = `../../assets/images/home-hero-${version}.jpg`;
  try {
    heroImage = require(imgPath);
  } catch(e) {
    // we have no hero image
    console.error('found no image when looking for', imgPath);
  }

  return (
    <section className={`home-hero home-hero-${version}`}>
      <figure>
        {
          heroImage &&
          <img src={ heroImage } alt="" />
        }
        { hero.caption }
      </figure>
    </section>
  )
}

HomeHero.propTypes = {
  version: PropTypes.oneOf([1, 2]),
}

export default HomeHero;
