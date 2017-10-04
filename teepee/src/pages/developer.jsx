import React from 'react';

const Developer = function(props) {
  return (
    <main className="page-developer">
      <div className="introduction">

        <h1>developer</h1>

        <div className="description">
          <div className="col">
            <p>
              We are currently working with local developers and contractors
              to create new dwellings in sites with various particular
              challenges, including:-
            </p>
            <ul>
              <li>Sites adjacent to flood plains;</li>
              <li>Sites within the curtilage of listed buildings;</li>
              <li>Backlands developments in town-centre locations</li>
              <li>Change of use applications under permitted development</li>
            </ul>
            <p>
              We are also working with clients who wish to repurpose existing
              buildings for alternative uses or income streams, such as
              wedding venues and holiday-lets
            </p>
          </div>
          <div className="col">
            <p>
              Past projects have involved dense urban
              developments on brownfield and garage sites,
              including street-frontage commercial units,
              rural developments for 50+ residential units
              outside of settlement boundaries, and bringing
              rural pubs back into use by creating necessary
              capital from housing developments on unused
              grounds
            </p>
          </div>
          <div className="col">
            <p>
              We have a broad range of regulatory
              experience with projects required to achieve
              standards in BREEAM, Lifetime Homes (now
              M4(2)/M4(3) Building Regulations), and
              Passivhaus, as well as staying up-to-date with
              changes in Planning Policies and Building
              Regulations
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Developer;
