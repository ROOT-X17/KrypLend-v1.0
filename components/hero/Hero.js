import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section>
      <div className="container hero --flex-dir-column">
        <div className="hero-text">
          <h1>The Fastest way to borrow any cryptocurrency of your choice!</h1>
          <p>
            Join the KrypLend network today for low transaction fees and
            interest rates. This is the best crypto lending platform out
            there...
          </p>

          <a href="#" className="--btn --btn-primary">
            Get Started
          </a>
        </div>
        <div className="hero-img">
          <Image src="/crypto.png" alt="login" width="225" height="450" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
