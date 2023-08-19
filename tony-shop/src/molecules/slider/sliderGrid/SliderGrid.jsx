import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const SliderGrid = () => {
  return (
    <>
      <Splide tag="section" aria-label="prueba" options={{ width: '100vw', height: '45vh', type: 'loop', perPage: 3 }}>
        <SplideSlide>
          <div style={{ width: '50px', height: '50px', backgroundColor: 'red' }}>
            <p>01</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ width: '50px', height: '50px', backgroundColor: 'red' }}>
            <p>02</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ width: '50px', height: '50px', backgroundColor: 'red' }}>
            <p>03</p>
          </div>
        </SplideSlide>
      </Splide>
    </>
  );
};

export default SliderGrid;
