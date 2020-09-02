import React from 'react';

function Header() {
  return (
    <div>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-md-offset-7 intro-text">
                  <h1>
                    Glenmarie’s First Transit Oriented Development
                    <span></span>
                  </h1>
                  <p>
                    The Glenz is an integrated development with convenience
                    built to mind with amenities just steps away.
                  </p>
                  <a
                    href="#overview"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    View Overview
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
