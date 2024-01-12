import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import AspectRatio from '@mui/joy/AspectRatio';
// static data
import { useSplide } from '@hooks/useSplide';
import { listMotorcycleBrand } from '@services/utils/static.data';
// scss
import '@splidejs/react-splide/css';

const SliderBrand = () => {
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
          gap: 1,
          autoplay: 'true',
          interval: 3000,
          drag: false,
          arrows: false
        }}
      >
        {listMotorcycleBrand.map((item) => (
          <SplideSlide key={`productItem${item.id}`}>
            <AspectRatio objectFit="cover">
              <img src={item.img} alt={`${item.img}_img`} />
            </AspectRatio>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default SliderBrand;
