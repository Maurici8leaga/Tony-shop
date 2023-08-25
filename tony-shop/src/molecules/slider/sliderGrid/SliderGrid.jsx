import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import CardItem from '@molecules/card/cardItem/CardItem';
// static data
import { useSplide } from '@hooks/useSplide';
import { listaProductosPrueba } from '@services/utils/static.data';
// scss
import '@splidejs/react-splide/css';
import '../sliderGrid/SliderGrid.scss';

const SliderGrid = () => {
  // number slide per breakpoint
  const numberOfSlides = useSplide();

  return (
    <>
      <Splide
        tag="section"
        aria-label="prueba"
        options={{
          width: '100vw',
          type: 'loop',
          pagination: false,
          perPage: numberOfSlides,
          gap: 12
        }}
      >
        {listaProductosPrueba.map((item) => (
          <SplideSlide key={`productItem${item.id}`}>
            <CardItem
              imgProduct={item.imgProduct}
              nameProduct={item.nameProduct}
              priceProduct={item.priceProduct}
              descriptionProduct={item.descriptionProduct}
            />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default SliderGrid;
