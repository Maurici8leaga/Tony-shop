import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import CardItem from '@molecules/card/cardItem/CardItem';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
// static data
import { useSplide } from '@hooks/useSplide';
import { listaProductosPrueba } from '@services/utils/static.data';
// scss
import '@splidejs/react-splide/css';
import '../sliderGrid/SliderGrid.scss';

const SliderGrid = () => {
  // aqui deberia aceptar como prop esa lista dinamica de elementos

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
        {/* esta lista de productos debe ser dinamica para que pueda aplicar para multiples usos listaProductosPrueba deberia
        ser un prop dinamico */}

        {/* falta incorporar loading a este condicional */}
        {listaProductosPrueba.length > 0 ? (
          listaProductosPrueba.map((item) => (
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
          ))
        ) : (
          <SplideSlide>
            <Skeleton variant="rectangular" width="100%" height={157} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton />
              <Skeleton width="50%" />
            </Box>
          </SplideSlide>
        )}
      </Splide>
    </>
  );
};

export default SliderGrid;
