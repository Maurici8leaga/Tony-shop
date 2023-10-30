import React from 'react';
import { SplideSlide } from '@splidejs/react-splide';
import ButtonSlider from '../buttonSlider/ButtonSlider';
import './SliderElement.scss';
import '@splidejs/react-splide/css';

const SliderElement = (prop) => {
  const { img, titleImg, titleh1, titleh2, subtitle, subtitleSize, btnText, href } = prop;
  return (
    <>
      <SplideSlide>
        <a href={href}>
          <img src={img} alt={`${titleImg}_img`} />
          <div className="splide__body">
            {titleh1 ? <h1>{titleh1}</h1> : <h2>{titleh2}</h2>}
            {subtitle ? <p className={subtitleSize}>{subtitle}</p> : <></>}
            <ButtonSlider text={btnText} />
          </div>
        </a>
      </SplideSlide>
    </>
  );
};

export default SliderElement;
