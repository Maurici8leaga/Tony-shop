import React from 'react';
import { SplideSlide } from '@splidejs/react-splide';
import ButtonSlider from '../buttonSlider/ButtonSlider';
import './SliderElement.scss';
import '@splidejs/react-splide/css';

const SliderElement = (prop) => {
  const { id, img, titleImg, titleh1, titleh2, subtitle, btnText, href } = prop;
  return (
    <>
      <SplideSlide>
        <figure>
          <img src={img} alt={`${titleImg}_img`} />
          <div className="splide__body">
            {titleh1 ? <h1>{titleh1}</h1> : <h2>{titleh2}</h2>}
            {subtitle ? <p>{subtitle}</p> : <></>}
            <ButtonSlider text={btnText} id={id} href={href} />
          </div>
        </figure>
      </SplideSlide>
    </>
  );
};

export default SliderElement;
