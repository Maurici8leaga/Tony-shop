import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import CardItem from '@molecules/card/cardItem/CardItem';
import { useSplide } from '@hooks/useSplide';
import { listaProductosPrueba } from '@services/utils/static.data';
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
          <SplideSlide key={`productItem_${item.id}`}>
            <CardItem
              idProduct={item.id}
              imgProduct={item.imgProduct}
              nameProduct={item.nameProduct}
              priceProduct={item.priceProduct}
              descriptionProduct={item.descriptionProduct}
              customWidth={'320px'}
              customHeight={'auto'}
              disabledBtn={true}
            />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default SliderGrid;
