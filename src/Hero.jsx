import React from 'react';
import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            cupiditate doloremque deleniti reiciendis. Qui minima ab voluptatum
            reprehenderit. Ipsum nihil expedita minima! Expedita voluptatum fuga
            aspernatur consectetur ad deleniti hic.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
