import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ducks1 from '../assets/images/ducks.jpg';
import ducks2 from '../assets/images/ducks2.jpg';
import ducks3 from '../assets/images/ducks3.jpg';
import ducks4 from '../assets/images/ducks4.jpg';
import '@splidejs/react-splide/css';
import './Banner.css'; // ✅ new stylesheet

const Banner = () => {
  return (
    <Splide
      aria-label="Featured"
      options={{
        type: 'loop',
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        pauseOnFocus: true,
        resetProgress: true,
        height: '400px', // default desktop height
      }}
      className="banner-carousel"
    >
      <SplideSlide>
        <a href="https://example.com">
          <img src={ducks1} alt="quack" />
        </a>
      </SplideSlide>
      <SplideSlide>
        <a href="https://example.com">
          <img src={ducks2} alt="quack quack" />
        </a>
      </SplideSlide>
      <SplideSlide>
        <a href="https://example.com">
          <img src={ducks3} alt="quack quack" />
        </a>
      </SplideSlide>
      <SplideSlide>
        <a href="https://example.com">
          <img src={ducks4} alt="quack quack quack" />
        </a>
      </SplideSlide>
    </Splide>
  );
};

export default Banner;
