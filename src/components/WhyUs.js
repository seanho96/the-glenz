import React from 'react';
import Card from './Card';

function WhyUs() {
  return (
    <div id="why-us" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h3>Why Us?</h3>
          <h1>A Perfect Investment & Upgrade</h1>
        </div>
        <Card
          title="Location"
          desc="The Glenz is set in a prime location with
convenient accessibility to major highways."
          img="../img/alt-landing-location.jpg"
        />
      </div>
    </div>
  );
}

export default WhyUs;
