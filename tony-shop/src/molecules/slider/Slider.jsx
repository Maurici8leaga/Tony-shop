import React, { useRef } from 'react';
import SliderElement from './SliderElement';

import './Slider.scss';
import Tony from '@assets/img/tony_shop.jpeg';
import Button from '@mui/material/Button';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Slider = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <Splide
        tag="section"
        aria-label="My Favorite Images"
        options={{ width: '100vw', height: '90vh', type: 'loop', autoplay: 'true', interval: 3000, drag: true }}
      >
        <SplideSlide>
          <a>
            <img src="https://picsum.photos/700/420" alt="Image 1" className="img_prueba" />
            <div className="splide__body">
              <p>HOLA PROBANDO </p>
              <Button variant="contained" color="primary" size="large">
                AQUI
              </Button>
            </div>
          </a>
        </SplideSlide>
        <SplideSlide>
          <img src={Tony} alt="Image 2" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Slider;
