import React from 'react';
import PropTypes from 'prop-types'; // PropTypes debe implementarse asi ya que ya no viene implicito de react
import { SplideSlide } from '@splidejs/react-splide';
import ButtonSlider from '../buttonSlider/ButtonSlider';
import './SliderElement.scss';
import '@splidejs/react-splide/css';

const SliderElement = (props) => {
  const { id, img, titleImg, titleh1, titleh2, subtitle, btnText, href } = props;
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

// Design Pattern Observer: https://refactoring.guru/es/design-patterns/observe
SliderElement.propTypes = {
  // se usa este patron para asi poder vigilar a los props y tener mayor seguridad de tipeo en ello
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired, //  si el prop lleva isRequired es porque es fundamental para el componente, sin el fallaria
  titleImg: PropTypes.string.isRequired,
  titleh1: PropTypes.string,
  // los props que no lleven isRequired es porque pueden llegar hacer opcinales para el component
  titleh2: PropTypes.string,
  subtitle: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default SliderElement;
