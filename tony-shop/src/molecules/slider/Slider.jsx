import React from 'react';
import { Splide } from '@splidejs/react-splide';
import SliderElement from './sliderElement/SliderElement';
import { dataCarousel } from '@services/utils/static.data';
import '@splidejs/react-splide/css';

const Slider = () => {
  return (
    <>
      <Splide
        tag="section"
        aria-label="My Favorite Images"
        options={{
          width: '100vw',
          height: '90vh',
          type: 'loop',
          autoplay: 'true',
          interval: 3000,
          drag: true,
          arrows: false
        }}
      >
        {dataCarousel.map((slide) => (
          <SliderElement
            key={slide.id}
            id={slide.id}
            img={slide.img}
            titleh1={slide.titleh1}
            titleh2={slide.titleh2}
            subtitle={slide.subtitle}
            btnText={slide.btnText}
            href={slide.href}
          />
        ))}
      </Splide>
    </>
  );
};

export default Slider;
