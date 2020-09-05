import React from 'react';

function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10">
            {' '}
            <img
              src="img/alt-landing-02.jpg"
              className="img-responsive about-img"
              alt=""
            />{' '}
          </div>
          <div className="about-overlay">
            <div className="about-text">
              <h3>About Us</h3>
              <h1>Strategically Located</h1>
              <p>
                The Glenz is located just 50m away from the upcoming Persiaran
                Kerjaya LRT3 Station, making it the first transit oriented
                development in Glenmarie, Shah Alam.
              </p>
              <a href="#location" className="btn btn-custom btn-lg page-scroll">
                View Location
              </a>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
