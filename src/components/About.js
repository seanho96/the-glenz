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
          <div className="col-xs-10 col-md-4 about-overlay">
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
          {/* <div className="col-xs-12 col-md-4">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                molestias!
              </p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>Lorem ipsum dolor sit amet.</ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>Lorem ipsum dolor sit amet.</ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
