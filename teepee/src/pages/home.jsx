import React from 'react';
import { Link } from 'react-router-dom';

const Home = function(props) {
  return (
    <main className="page-home">
      <div className="introduction">

        <div className="description">
          <div className="col">
            <p>
              We have been fortunate enough to work with many clients who are
              passionate about the way they wish to live and interact with
              their homes, or the homes that they provide for others.
            </p>
          </div>

          <div className="col">
            <p>
              Each project begins by first understanding the aspirations of the
              client, the conditions of the site, and the wider context.  From
              there, we work collaboratively with our clients to explore design
              themes and create opportunities for delightful spaces, resulting
              in buildings tailored to each situation.
            </p>
          </div>

          <div className="col">
            <p>
              At <b className="brand">studio teepee</b>, we believe
              well-considered compositions of spaces, views, and light, are
              critical to every project’s success, and we work hard to tease
              out such opportunities on every project, exploring interests in
              community, materiality, texture, and sustainability along the way.
            </p>
          </div>
        </div>
      </div>

      <div className="wide">
        <Link to="/homeowner" className="homeowner"><span>homeowner</span></Link>
        <Link to="/developer" className="developer"><span>developer</span></Link>
      </div>
    </main>
  );
}

export default Home;
