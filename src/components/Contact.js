import React from 'react';
import logo from '../assets/logo/logo_sb.png';

function Contact() {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>The Glenz @ Glenmarie Sales Gallery</h3>
              <p>
                27, Jalan Juruanalisis U1/35, <br />
                Hicom-Glenmarie Industrial Park, <br />
                40150 Shah Alam, Selangor.
              </p>
            </div>
            <div className="contact-item-socials">
              <p>
                <i className="fas fa-phone-volume social-icons"></i>
                <span>+6011-2826 1298</span>
              </p>
            </div>
            <div className="contact-item-socials">
              <p>
                <i className="far fa-envelope social-icons"></i>
                <span>theglenzsales@gmail.com</span>
              </p>
            </div>
            <div className="contact-item-socials">
              <p>
                <i className="fab fa-facebook-f social-icons-white"></i>
                <i className="fab fa-instagram social-icons-white social-icons-insta"></i>
              </p>
            </div>
          </div>

          <div className="col-md-3 contact-info">
            <div className="contact-item-middle">
              <h3>Easy Links</h3>
              <br />
            </div>
            <div className="col-md-4">
              <div className="contact-item-middle-col1">
                <a href="#overview">
                  <p>Overview</p>
                </a>
                <br />
                <a href="#units">
                  <p>Units</p>
                </a>

                <br />
                <a href="#location">
                  <p>Location</p>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-item-middle-col2">
                <a href="#floor-plan">
                  <p>Floor Plan</p>
                </a>

                <br />
                <a href="#facilities">
                  <p>Facilities</p>
                </a>

                <br />
                <a href="#gallery">
                  <p>Gallery</p>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-item-middle-col3">
                <a href="#developer">
                  <p>Developer</p>
                </a>

                <br />
                <a href="#register">
                  <p>Register</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-item-right">
              <h3 className="text-center">
                Winner of Best Commercial <br />
                Suites Development
              </h3>
              <img
                src="./img/awards-crop.png"
                className="img-responsive center-block"
                alt="award"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container">
          <div className="col-md-3 col-md-offset-1 footer-line">
            <p>&copy; 2019 The Glenz @ Glenmarie</p>
          </div>
          <div className="col-md-4 footer-line"></div>
          <div className="col-md-3 footer-line">
            <div className="col-md-8">
              <p className="text-right">Developed by</p>
            </div>
            <div className="col-md-4">
              <img src={logo} alt="logo"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
